import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; 
import "./index.css";

const Card = ({ data, onClick }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  
  useEffect(() => {
    const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const itemIsFavorited = existingFavorites.some((fav) => fav.name === data.name);
    setIsFavorited(itemIsFavorited);
  }, [data.name]);

  const handleFavoriteClick = () => {
    const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorited) {
      
      const updatedFavorites = existingFavorites.filter((fav) => fav.name !== data.name);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      
      existingFavorites.push(data);
      localStorage.setItem("favorites", JSON.stringify(existingFavorites));
    }

    
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="card" onClick={onClick}>
      <img src={data.images[0]} alt={data.name} className="card-image" />
      <h2>{data.name}</h2>
      <div className="character-details">
        <p> <strong>Gender:</strong> {data.personal && data.personal.sex ? data.personal.sex : 'N/A'} </p>
        <p> <strong>Birthdate:</strong> {data.personal && data.personal.birthdate ? data.personal.birthdate : 'N/A'} </p>
        <p><strong>Affiliation:</strong> {data.personal && data.personal.affiliation ? data.personal.affiliation : 'N/A'}</p>
        <p><strong>Debut Anime:</strong> {data.debut && data.debut.anime ? data.debut.anime : 'N/A'}</p>
        <p><strong>Debut Manga:</strong> {data.debut && data.debut.manga ? data.debut.manga : 'N/A'}</p>
      </div>
      
      <button className="favorite-btnsrc" onClick={(e) => {
        e.stopPropagation(); 
        handleFavoriteClick();
      }}>
        {isFavorited ? (
          <AiFillHeart className="favorite-icon filledsrc" />
        ) : (
          <AiOutlineHeart className="favorite-iconsrc" />
        )}
      </button>
    </div>
  );
};

export default Card;
