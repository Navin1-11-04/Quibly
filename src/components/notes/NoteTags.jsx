import React, { useState } from 'react';
import { useNotes } from '../../context/NoteContext'; // adjust path if needed
import { Tag } from 'lucide-react';

const NoteTags = () => {
    const { state, dispatch } = useNotes();
    const selectedNote = state.notes.find(n => n.id === state.selectedNoteId);

    const [tagInput, setTagInput] = useState('');

    const handleUpdateTags = (tags) => {
        if (selectedNote) {
            dispatch({
                type: 'UPDATE_NOTE',
                payload: {
                    id: selectedNote.id,
                    tags,
                },
            });
        }
    };

    return (
        <div className="w-[450px] h-full border-l border-default font-DM">
            <div className='flex items-center-safe w-full font-Inter px-3 py-2.5 font-medium gap-2 text-base bg-white border-b border-default'>
                <Tag size={16}/><h2>Tags</h2>
            </div>
            <div className='p-3 h-full w-full bg-white'>
                <input
                    type="text"
                    placeholder="Enter Tag"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && tagInput.trim()) {
                            e.preventDefault();
                            const newTags = [...(selectedNote?.tags || []), tagInput.trim()];
                            handleUpdateTags(newTags);
                            setTagInput('');
                        }
                    }}
                    className="w-full border-2 border-default bg-white p-2 rounded-lg mb-2"
                />

                <div className="flex flex-col gap-2 mt-1 border-t border-default py-3">
                    {(selectedNote?.tags || []).map((tag, index) => (
                        <span
                            key={index}
                            className="bg-default px-3 py-1 rounded-lg text-sm flex items-center justify-between"
                        >
                            {tag}
                            <button
                                onClick={() =>
                                    handleUpdateTags(selectedNote.tags.filter((t) => t !== tag))
                                }
                                className="text-red-500 font-bold text-lg cursor-pointer"
                            >
                                ×
                            </button>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NoteTags;
