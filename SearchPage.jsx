// SearchPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

const SearchPage = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      let allCharacters = [];
      for (let i = 1; i <= 6; i++) {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${i}`);
        allCharacters.push(response.data);
      }
      setCharacters(allCharacters);
    };
    fetchCharacters();
  }, []);

  const handleSearch = (e) => setSearch(e.target.value);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Search Characters</h1>
      <Search search={search} handleSearch={handleSearch} />
      <ul>
        {filteredCharacters
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(character => (
            <li key={character.id}>
              <img src={character.image} alt={character.name} width="50" height="50" />
              <Link to={`/character/${character.id}`}>{character.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchPage;
