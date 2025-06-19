import Main from "./components/layout/Main"
import NotesList from "./components/notes/NotesList"
import NoteEditor from "./components/notes/NoteEditor"
import SearchBar from "./components/filters/SearchBar"

function App() {
  return (
   <Main>
     <SearchBar/>
     <NotesList/>
     <NoteEditor/>
   </Main>
  )
}

export default App
