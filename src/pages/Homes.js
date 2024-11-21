import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../components/modal';
import Card from '../components/card';

const RandomCharacter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(''); // Masih digunakan untuk menampilkan pesan kesalahan
  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(null); 
  const [randomCharacters, setRandomCharacters] = useState([]); 

  const url = 'https://narutodb.xyz/api/character';

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      setError(''); // Reset error sebelum mengambil data

      const storedCharacters = localStorage.getItem('characters');
      if (storedCharacters) {
        const parsedCharacters = JSON.parse(storedCharacters);
        parsedCharacters.sort((a, b) => a.name.localeCompare(b.name));
        getRandomCharacters(parsedCharacters);
        setIsLoading(false);
        return;
      }

      let allCharacters = [];
      let page = 1;
      let hasMoreData = true;

      while (hasMoreData) {
        try {
          console.log(`Mengambil data dari API... Halaman: ${page}`);
          const response = await axios.get(`${url}?page=${page}`);

          if (response.data.characters && response.data.characters.length > 0) {
            allCharacters = [...allCharacters, ...response.data.characters];
            page++;
          } else {
            hasMoreData = false;
          }
        } catch (err) {
          console.error(err);
          setError('Failed to fetch characters. Please try again.'); // Set error jika terjadi kesalahan
          hasMoreData = false;
        }
      }

      allCharacters.sort((a, b) => a.name.localeCompare(b.name));
      localStorage.setItem('characters', JSON.stringify(allCharacters));
      getRandomCharacters(allCharacters); 
      setIsLoading(false);
    };

    fetchCharacters();
  }, []);

  const getRandomCharacters = (characterList) => {
    if (characterList.length >= 5) {
      const randomIndices = [];
      while (randomIndices.length < 5) {
        const randomIndex = Math.floor(Math.random() * characterList.length);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }

      const randomChars = randomIndices.map(index => characterList[index]);
      setRandomCharacters(randomChars);
    }
  };

  const handleCardClick = (character) => {
    setModalItem(character); 
    setModalShow(true); 
  };

  return (
    <main>
      <h1>This is Dattebayo App</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? ( // Jika ada error, tampilkan pesan error
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        randomCharacters.length > 0 ? (
          <div className="card-container">
            {randomCharacters.map((character) => (
              <Card
                key={character.id}
                data={character}
                onClick={() => handleCardClick(character)}
              />
            ))}
          </div>
        ) : (
          <p>No characters found.</p>
        )
      )}

      <Modal
        data={modalItem}
        isShow={modalShow}
        onCancel={() => setModalShow(false)}
      />
    </main>
  );
};

export default RandomCharacter;
