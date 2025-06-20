import NoteCard from './NoteCard';
import { useNotes } from '../../context/NoteContext';
import { filterNoteByTag } from '../../utils/noteService';
import { filterNotes } from '../../utils/noteService';

const NotesList = () => {
  const { state, dispatch } = useNotes();

  const filteredNotes = filterNotes(state.notes, state.searchTerm);

  const handleSelectNote = (id) => {
    dispatch({ type: 'SELECT_NOTE', payload: id });
  };

  return (
    <div className="w-full h-full col-span-1 font-DM max-w-[585px] overflow-hidden">
      {filteredNotes.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center">
          <span>No Matching notes...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 overflow-y-auto note_list w-full p-3 h-full">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} onClick={handleSelectNote} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;
