import React, { useState, useEffect } from "react";
import Card from "../../components/card"; // Pastikan path ke komponen Card sudah benar
import "./FavoritePage.css";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="favorites-page">
      <h2>My Favorite Characters</h2>
      {favorites.length > 0 ? (
        <div className="cardAZ-container">
          {favorites.map((character, index) => (
            <Card key={index} data={character} />
          ))}
        </div>
      ) : (
        <p>No favorite characters added yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
