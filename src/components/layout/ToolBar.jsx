import React, { useEffect, useState } from 'react'
import { useNotes } from "../../context/NoteContext";
import SearchBar from '../filters/SearchBar'


const ToolBar = () => {
    const { state, dispatch } = useNotes();
    const handleNewNote = () => {
        dispatch({ type: 'SELECT_NOTE', payload: null });
    };

    return (
        <div className="w-full flex items-center justify-between border-b border-default font-DM px-3 py-1">
            <SearchBar />
            <button
                onClick={handleNewNote}
                className='px-4 py-1.5 text-white bg-primary rounded-full flex items-center justify-center text-sm font-light w-[120px]'
            >+ New Note
            </button>
        </div>
    )
}

export default ToolBar