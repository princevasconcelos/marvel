import React from 'react';
import { useAsync } from 'react-async';

import api from '../../services/api';

import useFilter from '../../hooks/useFilter';
import useModal from '../../hooks/useModal';

import List from '../../components/List';
import Loading from '../../components/Loading';

function Character() {
  const [query, setQuery] = React.useState('');
  const { Modal, toggleModal } = useModal();

  const {
    limit,
    handleLimitChange,
    offset,
    handleOffsetChange,
    orderBy,
    handleOrderByChange,
  } = useFilter();

  const {
    data, error, isLoading, finishedAt, run,
  } = useAsync({
    promiseFn: api.getInitialCharacters,
    deferFn: api.getCharacter,
  });

  const handleQueryChange = e => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    run({
      limit,
      offset,
      orderBy,
      ...(query && { name: query }),
    });
  };

  return (
    <>
      <button type="button" onClick={toggleModal}>
        toggle modal
      </button>
      <Modal>
        <span>aew</span>
      </Modal>
    </>
  );

  // if (isLoading) return <Loading />;
  // if (error) return `Something went wrong: ${error}`;
  // return (
  //   <div>
  //     <span>Characters</span>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         value={query}
  //         onChange={handleQueryChange}
  //         placeholder="Search a character"
  //       />
  //       <input value={limit} onChange={handleLimitChange} placeholder="limit" />
  //       <input
  //         value={offset}
  //         onChange={handleOffsetChange}
  //         placeholder="offset"
  //       />
  //       <input
  //         value={orderBy}
  //         onChange={handleOrderByChange}
  //         placeholder="orderBy"
  //       />
  //       <button type="submit">Search</button>
  //     </form>
  //     <span>{finishedAt.toISOString()}</span>
  //     <List data={data.results} />
  //   </div>
  // );
}

export default Character;
