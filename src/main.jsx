import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NotesProvider } from './context/NoteContext.jsx'


createRoot(document.getElementById('root')).render(
  <NotesProvider>
    <App />
  </NotesProvider>
)
