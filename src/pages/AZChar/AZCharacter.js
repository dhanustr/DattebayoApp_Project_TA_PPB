import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../../components/CardA-Z";
import Modal from "../../components/ModalA-Z";
import AlphabetFilter from "../../components/Alphabetic-filter";

export default function AZChar() {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    

    const url = "https://narutodb.xyz/api/character";

    useEffect(() => {
        const fetchCharacters = async () => {
            setIsLoading(true);
            setError('');
            
            const storedCharacters = localStorage.getItem('characters');
            if (storedCharacters) {
                const parsedCharacters = JSON.parse(storedCharacters);
                parsedCharacters.sort((a, b) => a.name.localeCompare(b.name));
                setCharacters(parsedCharacters);
                setFilteredCharacters(parsedCharacters);
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
                    setError('Error fetching characters');
                    console.error(err);
                    hasMoreData = false;
                }
            }

            allCharacters.sort((a, b) => a.name.localeCompare(b.name));
            setCharacters(allCharacters);
            setFilteredCharacters(allCharacters);
            localStorage.setItem('characters', JSON.stringify(allCharacters));
            setIsLoading(false);
        };

        fetchCharacters();
    }, []);

    const handleClick = (character) => {
        setModalShow(true);
        setModalItem(character);
    };

    const filterByLetter = (letter) => {
        const filtered = characters.filter(character => character.name.startsWith(letter));
        setFilteredCharacters(filtered);
    };


    return (
        <main>
            <h1>Naruto Characters A-Z</h1>

          
            <AlphabetFilter onLetterSelect={filterByLetter} />

            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <div className="cardAZ-container">
                    {filteredCharacters.map((character, index) => (
                        <Card key={index} characterData={character} onClick={() => handleClick(character)} />
                    ))}
                </div>
            )}

            <Modal
                characterData={modalItem}
                isShow={modalShow}
                onCancel={() => setModalShow(false)}
            />
        </main>
    );
}
