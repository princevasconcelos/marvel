import React from 'react';
// import { Form, Input } from '@rocketseat/unform';
import { useAsync } from 'react-async';

import api from './services/api';

function App() {
  const filters = JSON.parse(localStorage.getItem('filters')) || {};
  const [query, setQuery] = React.useState('');
  const [limit, setLimit] = React.useState(filters.limit || 20);
  const [offset, setOffset] = React.useState(filters.offset || 0);
  const [orderBy, setOrderBy] = React.useState(filters.orderBy || '');

  const {
    data, error, isLoading, finishedAt, run,
  } = useAsync({
    promiseFn: api.getInitialCharacters,
    deferFn: api.getCharacter,
  });

  // useLocalStorageFilters
  React.useEffect(() => {
    localStorage.setItem(
      'filters',
      JSON.stringify({
        limit,
        offset,
        orderBy,
      }),
    );
  }, [limit, offset, orderBy]);

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function isLetter(word) {
    return word.match(/\D+/gi);
  }

  function handleLimitChange(e) {
    const { value } = e.target;
    if (isLetter(value)) return e.preventDefault();
    return setLimit(e.target.value);
  }

  function handleOffsetChange(e) {
    const { value } = e.target;
    if (isLetter(value)) return e.preventDefault();
    return setOffset(e.target.value);
  }

  function handleOrderByChange(e) {
    setOrderBy(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    run({
      limit,
      offset,
      orderBy,
      ...(query && { name: query }),
    });
  }

  if (isLoading) return 'Loading';
  if (error) return `Something went wrong: ${error}`;
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={handleQueryChange}
        placeholder="Search a character"
      />
      <input value={limit} onChange={handleLimitChange} placeholder="limit" />
      <input
        value={offset}
        onChange={handleOffsetChange}
        placeholder="offset"
      />
      <input
        value={orderBy}
        onChange={handleOrderByChange}
        placeholder="orderBy"
      />
      <button type="submit">Search</button>
      <u>
        {data.results
          && data.results.map(char => (
            <li key={char.id}>
              <img
                style={{ width: '100px', height: '100px' }}
                src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              />
            </li>
          ))}
      </u>
    </form>
  );
}

export default App;
