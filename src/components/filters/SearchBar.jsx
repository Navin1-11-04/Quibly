import { useNotes } from '../../context/NoteContext';

const SearchBar = () => {
  const { state, dispatch } = useNotes();

  const handleSearch = (e) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value });
  };

  return (
    <input
      type="text"
      value={state.searchTerm}
      onChange={handleSearch}
      placeholder="Search notes..."
      style={{
        width: '100%',
        padding: '0.5rem',
        fontSize: '1rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
      }}
    />
  );
};

export default SearchBar;
