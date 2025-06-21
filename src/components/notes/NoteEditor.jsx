import { useEffect, useState } from 'react';
import { useNotes } from "../../context/NoteContext";
import { FileCheck2, Pencil, Plus, Save, SquarePen } from 'lucide-react';

const NoteEditor = () => {
    const { state, dispatch } = useNotes();
    const selectedNote = state.notes.find(n => n.id === state.selectedNoteId);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [themeColor, setThemeColor] = useState('#ffffff');
    const [isEditing, setIsEditing] = useState(false);

    const themes = [
        "#ffffff", "#66c5cc", "#f6cf71", "#f89c74", "#dcb0f2",
        "#87c55f", "#9eb9f3", "#fe88b1", "#c9db74", "#8be0a4", "#b497e7"
    ];

    const handleNewNote = () => {
        dispatch({ type: 'SELECT_NOTE', payload: null });
    };

    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title);
            setContent(selectedNote.content);
            setThemeColor(selectedNote.theme || '#ffffff');
            setIsEditing(false);
        } else {
            setTitle('');
            setContent('');
            setThemeColor('#ffffff');
            setIsEditing(true);
        }
    }, [selectedNote]);

    const handleSave = () => {
        if (selectedNote) {
            dispatch({
                type: 'UPDATE_NOTE',
                payload: {
                    id: selectedNote.id,
                    title,
                    content,
                    theme: themeColor
                }
            });
            setIsEditing(false);
        } else {
            dispatch({
                type: 'ADD_NOTE',
                payload: {
                    title,
                    content,
                    theme: themeColor
                }
            });
            dispatch({ type: 'SELECT_NOTE', payload: null });
            setTitle('');
            setContent('');
        }
    };

    const handleEdit = () => setIsEditing(true);

    return (
        <div className='w-full h-full flex flex-col border-l border-default font-DM'>
            <div className='flex items-center justify-between px-3 py-[6.5px] font-medium text-base bg-white border-b border-default'>
                <div className='flex items-center gap-2'>
                    <FileCheck2 size={16} /><h2>Note</h2>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <button
                        onClick={handleNewNote}
                        className='text-sm flex items-center-safe justify-center py-1 px-3 bg-default rounded-sm gap-1 cursor-pointer border-2 border-default hover:border-blue-500 hover:bg-white'
                    >
                        <Plus size={14} strokeWidth={2} />
                        New Note
                    </button>
                    {(selectedNote || isEditing) && (
                        <button
                            onClick={isEditing ? handleSave : handleEdit}
                            className='text-sm flex items-center-safe justify-center py-1 px-3 bg-default rounded-sm gap-1 cursor-pointer
                        border-2 border-default hover:border-blue-500 hover:bg-white'
                        >
                            {isEditing ? (
                                <>
                                    <Save size={14} strokeWidth={2} className="inline-block mr-1" />
                                    Save
                                </>
                            ) : (
                                <>
                                    <SquarePen size={14} strokeWidth={2} className="inline-block mr-1" />
                                    Edit
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>

            {!isEditing ? (
                <div className="p-3 bg-light h-full w-full overflow-y-auto font-DM">
                    <div className='bg-white border-[3px] border-default rounded-xl h-auto w-full p-4 note_card'>
                        <h2 className="text-2xl font-medium pb-3 border-b border-default">{title || 'Untitled'}</h2>
                        <p className="whitespace-pre-wrap py-3">{content || 'No content...'}</p>
                    </div>
                </div>
            ) : (
                <div className="p-3 space-y-3">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Note Title"
                        className="w-full border-2 border-default p-3 rounded-xl bg-white"
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your note here..."
                        rows={14}
                        className="w-full h-full border-2 border-default p-3 rounded-xl bg-white"
                    />
                    {/* <div>
                        <label className="block mb-1 text-sm">Choose Theme:</label>
                        <select
                            value={themeColor}
                            onChange={(e) => setThemeColor(e.target.value)}
                            className="border rounded p-1"
                        >
                            {themes.map((color) => (
                                <option key={color} value={color}>
                                    {color}
                                </option>
                            ))}
                        </select>
                    </div> */}
                </div>
            )}
        </div>
    );
};

export default NoteEditor;
