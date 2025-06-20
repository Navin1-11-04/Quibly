import { useEffect, useState } from 'react';
import { useNotes } from "../../context/NoteContext";

const NoteEditor = () => {
    const { state, dispatch } = useNotes();
    const selectedNote = state.notes.find(n => n.id === state.selectedNoteId);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleNewNote = () => {
        dispatch({ type: 'SELECT_NOTE', payload: null });
    };

    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title);
            setContent(selectedNote.content);
        } else {
            setTitle('');
            setContent('');
        }
    }, [selectedNote]);

    const handleSave = () => {
        if (selectedNote) {
            dispatch({
                type: 'UPDATE_NOTE',
                payload: {
                    id: selectedNote.id,
                    title,
                    content
                }
            });
        } else {
            dispatch({
                type: 'ADD_NOTE',
                payload: {
                    title,
                    content
                }
            });

            // 👇 Clear selectedNoteId to allow fresh creation next time
            dispatch({ type: 'SELECT_NOTE', payload: null });

            // Optional: reset fields
            setTitle('');
            setContent('');
        }
    };


    return (
        <div className='max-w-[200px]'>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Note Title"
                style={{
                    fontSize: '1.2rem',
                    width: '100%',
                    padding: '0.5rem',
                    marginBottom: '0.5rem'
                }}
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your note here..."
                rows={10}
                style={{
                    width: '100%',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    borderRadius: '6px',
                }}
            />
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
            <button
                onClick={handleSave}
                style={{
                    marginLeft: '0.5rem',
                    padding: '0.3rem 0.8rem',
                    backgroundColor: '#4f46e5',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                💾 Save Note
            </button>
        </div>
    );
};

export default NoteEditor;
