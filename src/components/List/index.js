import React from 'react';

function List({ data, showAs }) {
  return (
    <ul>
      {data
        && data.map(char => (
          <li key={char.id}>
            <img
              alt="MUDAR DEPOIS"
              style={{ width: '100px', height: '100px' }}
              src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
            />
          </li>
        ))}
    </ul>
  );
}

export default List;
