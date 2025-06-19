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
    <div>
      {filteredNotes.length === 0 ? (
        <p>No matching notes.</p>
      ) : (
        filteredNotes.map((note) => (
          <NoteCard key={note.id} note={note} onClick={handleSelectNote} />
        ))
      )}
    </div>
  );
};

export default NotesList;
