import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '../hooks/useLocalStorage';

const NotesContext = createContext();

const initialState = {
  notes: [],
  selectedNoteId: null,
  searchTerm: '',
};

function notesReducer(state, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      const newNote = {
        id: uuidv4(),
        title: action.payload.title || 'Untitled',
        content: action.payload.content || '',
        tags: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      return {
        ...state,
        notes: [newNote, ...state.notes],
        selectedNoteId: null,
      };

    case 'UPDATE_NOTE':
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? { ...note, ...action.payload, updatedAt: new Date() }
            : note
        ),
      };

    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
        selectedNoteId:
          state.selectedNoteId === action.payload
            ? null
            : state.selectedNoteId,
      };

    case 'SELECT_NOTE':
      return {
        ...state,
        selectedNoteId: action.payload,
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload
      };
    default:
      return state;
  }
}

export function NotesProvider({ children }) {
  const [persistedState, setPersistedState] = useLocalStorage(
    'notes-app',
    initialState
  );

  const [state, dispatch] = useReducer(notesReducer, persistedState);

  useEffect(() => {
    setPersistedState(state);
  }, [state]);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context)
    throw new Error('useNotes must be used within NotesProvider');
  return context;
}
