import Main from "./components/layout/Main"
import NotesList from "./components/notes/NotesList"
import NoteEditor from "./components/notes/NoteEditor"

function App() {
  return (
   <Main>
     <NotesList/>
     <NoteEditor/>
   </Main>
  )
}

export default App
