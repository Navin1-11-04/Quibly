import NoteCard from './NoteCard';
import { useNotes } from '../../context/NoteContext';
import { filterNoteByTag } from '../../utils/noteService';
import { filterNotes } from '../../utils/noteService';
import { Files } from 'lucide-react';

const NotesList = () => {
  const { state, dispatch } = useNotes();

  const filteredNotes = filterNotes(state.notes, state.searchTerm);

  const handleSelectNote = (id) => {
    dispatch({ type: 'SELECT_NOTE', payload: id });
  };

  const isSearchActive = state.searchTerm.trim().length > 0;
  const hasNoNotes = state.notes.length === 0;
  const noSearchResults = isSearchActive && filteredNotes.length === 0;

  return (
    <div className="w-full h-full max-w-[585px] font-DM flex flex-col">
    <div className='flex items-center-safe w-full font-Inter px-3 py-2.5 font-medium gap-3 text-base bg-white border-b border-default'>
      <Files size={16}/><h2>My Notes</h2>
    </div>
    <div className="overflow-hidden">
      {hasNoNotes ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-primary text-base p-4 py-10">
            <h4 className='text-xl text-secondary'>You don’t have any notes yet.</h4>
            <p>Create a new one to get started!</p>
          </div>
        ) : noSearchResults ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-primary text-base p-4 py-10">
            <h4 className='text-xl text-secondary'>No matching notes found.</h4>
            <p>Try adjusting your search or create a new note.</p>
          </div>
        ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 overflow-y-auto note_list w-full p-3 h-full">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} onClick={handleSelectNote} />
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default NotesList;
