const NoteCard = ({ note, onClick }) => {
  return (
    <div
      onClick={() => onClick(note.id)}
      style={{
        padding: '1rem',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        marginBottom: '1rem',
        cursor: 'pointer',
        backgroundColor: '#fff',
      }}
    >
      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{note.title}</h3>
      <p style={{ color: '#555', fontSize: '0.9rem' }}>
        {note.content.slice(0, 100)}...
      </p>
    </div>
  );
};

export default NoteCard;
