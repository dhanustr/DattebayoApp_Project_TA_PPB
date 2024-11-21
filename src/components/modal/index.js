

import React from "react";

import "./index.css";

export default function Modal({ data, isShow, onCancel }) {
    if (!isShow || !data) return null;

    return (
        <>
          
            <div className="modal-overlay" onClick={onCancel}></div>
            
           
            <div className="modal">
                <button className="close-button" onClick={onCancel}>X</button>
                
               
                <img 
                src={data.images[0]} 
                alt={data.name} 
                style={{ width: "100%", height: "auto", borderRadius: "5px" }} 
            />
                
               
                <h2>{data.name}</h2>
                <p><strong>clan :</strong>{data.personal.clan}</p>
                <p><strong>Debut Anime:</strong> {data.debut && data.debut.anime ? data.debut.anime : 'N/A'}</p>
                <p><strong>Debut Manga:</strong> {data.debut && data.debut.manga ? data.debut.manga :'N/A'}</p>
                <p><strong> Status : </strong> {data.personal && data.personal.status? data.personal.status : 'Alive'}</p>
                <p><strong>jutsu :</strong>{data.jutsu}</p>
            </div>
        </>
    );
}
