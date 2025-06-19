import { v4 as uuidv4 } from 'uuid';

export function createNote(title='Untitled',content=''){
    return{
        id:uuidv4(),
        title,
        content,
        tags:[],
        createdAt:new Date(),
        updatedAt:new Date(),
    };
}

export function updateNote(note,updates){
    return{
        ...note,
        ...updates,
        updatedAt:new Date(),
    }
}

export function filterNotes(notes,searchTerm){
    if(!searchTerm.trim()) return notes;
    const lowerSearch = searchTerm.toLowerCase();

    return notes.filter((note) =>
        note.title.toLowerCase().includes(lowerSearch)|| note.content.toLowerCase().includes(lowerSearch)
    )
}

export function filterNoteByTag(notes,tag){
    if(!tag) return notes;
    return notes.filter((note) => note.tags.includes(tag));
}