import { NoteProvider } from "./context/NoteContext"


function App() {
  return (
   <NoteProvider>
    <div className="App">
       <h1>Notes</h1>
    </div>
   </NoteProvider>
  )
}

export default App
