import React, { useEffect, useState } from 'react'
import { useNotes } from "../../context/NoteContext";
import SearchBar from '../filters/SearchBar'


const ToolBar = () => {
    const { state, dispatch } = useNotes();
    const handleNewNote = () => {
        dispatch({ type: 'SELECT_NOTE', payload: null });
    };

    return (
        <div className="w-full flex items-center justify-between border-b border-default">
            <SearchBar />
            <button
                onClick={handleNewNote}
                style={{
                    marginBottom: '1rem',
                    padding: '0.3rem 0.8rem',
                    backgroundColor: '#10b981',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                + New Note
            </button>
        </div>
    )
}

export default ToolBar