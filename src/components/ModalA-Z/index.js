import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; // Ikon hati dari react-icons
import "./index.css";

const Modal = ({ characterData, isShow, onCancel }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    // Cek apakah karakter sudah difavoritkan ketika modal dimuat
    useEffect(() => {
        if (characterData) {
            const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            const isFav = favorites.some(fav => fav.name === characterData.name);
            setIsFavorite(isFav);
        }
    }, [characterData]);

    // Fungsi untuk menangani klik tombol favorit
    const handleFavoriteClick = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (isFavorite) {
            // Hapus dari favorit
            const updatedFavorites = favorites.filter(fav => fav.name !== characterData.name);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            setIsFavorite(false);
        } else {
            // Tambahkan ke favorit
            favorites.push(characterData);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    if (!isShow || !characterData) return null;

    return (
        <div className="modal-overlay" onClick={onCancel}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onCancel}>X</button>
                
                <img src={characterData.images[0]} alt={characterData.name} />
                <h3>{characterData.name}</h3>
                <p><strong>Gender:</strong> {characterData.personal.sex && characterData.personal.sex ? characterData.personal.sex : 'N/A'}</p>
                <p><strong>Birthdate:</strong> {characterData.personal.birthdate && characterData.personal.birthdate ? characterData.personal.birthdate :'N/A' }</p>
                <p><strong>Affiliation:</strong> {characterData.personal && characterData.personal.affiliation ? characterData.personal.affiliation : 'N/A'}</p>
                <p><strong> Status : </strong> {characterData.personal && characterData.personal.status? characterData.personal.status : 'Alive'}</p>
               
                <button className="favorite-button-mdl" onClick={handleFavoriteClick}>
                    {isFavorite ? (
                        <AiFillHeart className="favorite-icon filled" />
                    ) : (
                        <AiOutlineHeart className="favorite-icon" />
                    )}
                    
                </button>
            </div>
        </div>
    );
};

export default Modal;
