

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://ap-backend-9neb.onrender.com/api/items')
      .then(res => setItems(res.data))
      .catch(err => console.error('Failed to fetch items:', err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {items.map(item => (
          <div key={item._id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={item.image} alt={item.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{item.title}</h3>
            <p>Rate: {item.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageComponent;
