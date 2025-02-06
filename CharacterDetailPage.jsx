
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetailPage = ({ match }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${match.params.id}`);
      setCharacter(response.data);
    };
    fetchCharacter();
  }, [match.params.id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Origin:</strong> {character.origin.name}</p>
      {/* Add other character details here */}
    </div>
  );
};

export default CharacterDetailPage;
