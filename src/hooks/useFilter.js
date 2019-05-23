import React from 'react';

function useFilter() {
  const filters = JSON.parse(localStorage.getItem('filters'));
  const [limit, setLimit] = React.useState(filters.limit || 20);
  const [offset, setOffset] = React.useState(filters.offset || 0);
  const [orderBy, setOrderBy] = React.useState(filters.orderBy || 'name');

  const hasAnyLetter = word => word.match(/\D+/gi);

  const handleLimitChange = (e) => {
    const { value } = e.target;
    if (hasAnyLetter(value)) return e.preventDefault();
    return setLimit(value);
  };

  const handleOffsetChange = (e) => {
    const { value } = e.target;
    if (hasAnyLetter(value)) return e.preventDefault();
    return setOffset(value);
  };

  const handleOrderByChange = e => setOrderBy(e.target.value);

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

  return {
    limit,
    handleLimitChange,
    offset,
    handleOffsetChange,
    orderBy,
    handleOrderByChange,
  };
}

export default useFilter;
