import React, { useState, useEffect } from 'react';


const USERS = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 15000 },
  { id: 4, name: "Keyboard", price: 1000 },
  { id: 5, name: "Mouse", price: 500 }
];


const useSearch = (data, query) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const lowerQuery = query.toLowerCase();
    const results = data.filter(item => 
      item.name.toLowerCase().includes(lowerQuery)
    );
    setFilteredData(results);
  }, [query, data]);

  return filteredData;
};


const UserList = ({ items, total }) => {
  return (
    <div style={{ marginTop: '15px' }}>
      <p style={{ fontWeight: 'bold' }}>Showing {items.length} of {total} products</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map(item => (
          <li key={item.id} style={{ padding: '5px 0' }}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default function UserDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = useSearch(USERS, searchTerm);

  return (
    <div>
      <h2>Product Search</h2>
      <input
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', width: '100%', maxWidth: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <UserList items={filteredUsers} total={USERS.length} />
    </div>
  );
}