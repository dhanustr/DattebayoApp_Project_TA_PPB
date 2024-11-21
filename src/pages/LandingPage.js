import React, { useState, useEffect } from 'react';

// Components
import Card from '../components/card';
import Modal from '../components/modal';

export default function LandingPage() {
   
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [characterName, setCharacterName] = useState('Naruto');
    const [error, setError] = useState('');

    // Modal
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    // Fungsi untuk mencari karakter dari cache
    const searchCharactersFromCache = (name) => {
        const storedCharacters = localStorage.getItem('characters');
        if (storedCharacters) {
            const parsedCharacters = JSON.parse(storedCharacters);
            // Cari karakter yang namanya mengandung teks pencarian (case-insensitive)
            return parsedCharacters.filter((char) =>
                char.name.toLowerCase().includes(name.toLowerCase())
            );
        }
        return [];
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError('');

            // Cari data dari cache
            const cachedCharacters = searchCharactersFromCache(characterName);

            if (cachedCharacters.length > 0) {
                setFilteredCharacters(cachedCharacters);
            } else {
                setError('Character not found in cache');
            }
            setIsLoading(false);
        };

        fetchData();
    }, [characterName]);

    const onSearch = (e) => {
        if (e.key === 'Enter') {
            setCharacterName(e.target.value);
        }
    };

    const handleClick = (character) => {
        setModalShow(true);
        setModalItem(character);
    };

    return (
        <main>
            <input
                type="text"
                placeholder="Enter character name"
                onKeyDown={onSearch}
            />
            <h3 className="title">Search: {characterName}</h3>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <div className="card-container">
                    {filteredCharacters.map((character, index) => (
                        <Card
                            key={index}
                            data={character}
                            onClick={() => handleClick(character)}
                        />
                    ))}
                </div>
            )}

            {/* Modal component is placed after main content */}
            <Modal
                data={modalItem}
                isShow={modalShow}
                onCancel={() => setModalShow(false)}
            />
        </main>
    );
}
