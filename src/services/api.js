const url = 'https://gateway.marvel.com:443/v1/public/characters';
const defaultQuery = {
  apikey: process.env.REACT_APP_API_KEY,
};

const getInitialCharacters = () => {
  const queryString = new URLSearchParams(defaultQuery);
  return fetch(`${url}?${queryString.toString()}`).then(r => r.json());
};

const getCharacter = ([filters]) => {
  const newFilters = { ...defaultQuery, ...filters };
  const queryString = new URLSearchParams(newFilters);
  return fetch(`${url}?${queryString.toString()}`).then(r => r.json());
};

const api = {
  getInitialCharacters,
  getCharacter,
};

export default api;
