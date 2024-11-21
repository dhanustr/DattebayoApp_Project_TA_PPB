
import React from 'react';
import './index.css';

export default function AlphabetFilter({ onLetterSelect }) {
    return (
        <div className="alphabet-filter">
            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
                <span key={letter} onClick={() => onLetterSelect(letter)}>
                    {letter}
                </span>
            ))}
        </div>
    );
}
