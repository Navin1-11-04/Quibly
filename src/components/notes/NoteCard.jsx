import { useNotes } from "../../context/NoteContext";
import { FileText, RotateCw, X } from 'lucide-react'
const NoteCard = ({ note, onClick }) => {

  const { state, dispatch } = useNotes();
  const isSelected = state.selectedNoteId === note.id;
  const theme = ["#66c5cc", "#f6cf71", "#f89c74", "#dcb0f2", "87c55f", "#9eb9f3", "#fe88b1", "#c9db74", "8be0a4", "#b497e7"]
  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this note?")) {
      dispatch({ type: 'DELETE_NOTE', payload: note.id });
    }
  };

  return (

    <div
      onClick={() => onClick(note.id)}
      className={`p-4 rounded-3xl border-2 max-w-[270px] min-w-[270px] cursor-pointer bg-white ${isSelected ? 'border-blue-500' : 'border-default'} note_card }`}>
      <div className="w-full py-1 pb-3 flex items-start justify-between border-b border-default">
        <div>
          <FileText size={18} />
        </div>
        <button
          onClick={handleDelete}
          className="text-[#bbb] text-sm hover:text-red-500 cursor-pointer"
        >
          <X  size={20}/>
        </button>
      </div>
      <div className="w-full border-b border-default">
        <div className="w-full h-full flex items-baseline justify-between py-2">
          <h2 className="text-lg font-medium tracking-tight capitalize">{note.title.length > 14 ? note.title.slice(0,14) +"..." : note.title}</h2>
          <span className="text-xs font-normal text-primary tracking-right">{new Date(note.updatedAt).toLocaleDateString()}</span>
        </div>
        <p className="text-sm font-normal text-justify pb-3 min-h-[92px]">
         {note.content.length > 120 ? note.content.slice(0, 120) + "..." : note.content}
        </p>
      </div>
      <div className="w-full flex items-end justify-between pt-3 text-xs font-light text-[#c4c4c4]">
        <span className="flex items-center justify-center text-primary gap-1 font-normal"><RotateCw size={14} />Last Updated</span>
        <span>{new Date(note.updatedAt).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default NoteCard;
