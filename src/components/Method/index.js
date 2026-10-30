import React from 'react';

const colors = {
  GET: '#2e8555',
  POST: '#1c6bd6',
  PUT: '#b45f00',
  DELETE: '#c62828',
};

export default function Method({type}) {
  return (
    <span
      style={{
        backgroundColor: colors[type],
        color: '#fff',
        padding: '2px 8px',
        borderRadius: '4px',
        fontSize: '0.8em',
        fontWeight: 700,
      }}>
      {type}
    </span>
  );
}