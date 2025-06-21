import Main from "./components/layout/Main"
import NotesList from "./components/notes/NotesList"
import NoteEditor from "./components/notes/NoteEditor"
import NoteTags from "./components/notes/NoteTags"
function App() {
  return (
   <Main>
     <NotesList/>
     <NoteEditor/>
     <NoteTags/>
   </Main>
  )
}

export default App
