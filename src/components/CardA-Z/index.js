import React, { useState, useEffect } from "react";
import "./cardA-Z.css"; 
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; 

const Card = ({ characterData, onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favorites.some(fav => fav.name === characterData.name);
    setIsFavorite(isFav);
  }, [characterData]);

  
  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      
      const updatedFavorites = favorites.filter(fav => fav.name !== characterData.name);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
     
      favorites.push(characterData);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    <div className="cardAZ" onClick={onClick}>
      <h2 className="cardAZ-title">{characterData.name}</h2>
      <div className="character-details">
      
      </div>
     
      <button className="favorite-button" onClick={(e) => {
        e.stopPropagation(); 
        handleFavoriteClick();
      }}>
        {isFavorite ? (
          <AiFillHeart className="favorite-icon filled" />
        ) : (
          <AiOutlineHeart className="favorite-icon" />
        )}
      </button>
    </div>
  );
};

export default Card;
