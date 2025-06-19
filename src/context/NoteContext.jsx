import { createContext,useReducer, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    notes:[],
    selectedNoteId:null,
}

let noteReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_NOTE':
            const newNote = {
                id:uuidv4(),
                title:action.payload.title || 'Untitled',
                content:action.payload.content || '',
                tags:[],
                createdAt:new Date(),
            };
            return {
                ...state,
                notes:[newNote,...state.notes],
                selectedNoteId:newNote.id
            }
        case 'UPDATE_NOTE':
            return {
                ...state,
                notes:state.notes.map(note =>
                    note.id === action.payload.id ?{...note,...action.payload,updatedAt:new Date()} : note
                )
            }
        case 'DELETE_NOTE':
            return {
                ...state,
                notes:state.notes.filter(note => note.id !== action.payload),
                selectedNoteId:state.selectedNoteId === action.payload ? null : state.selectedNoteId
            };
        case 'SELECT_NOTE':
            return{
                ...state,
                selectedNoteId:action.payload
            };
        default:
            return state;
    }
}

const NotesContext = createContext();

export function NoteProvider({children}){
    const [state,dispatch] = useReducer(noteReducer,initialState);
    return(
        <NotesContext.Provider value={{state,dispatch}}>
            {children}
        </NotesContext.Provider>
    )
}

export function useNotes(){
    const context = useContext(NotesContext);
    if(!context) throw new Error("useNotes must be used within NotesProvider");
    return context;
}