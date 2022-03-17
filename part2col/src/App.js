import Note from './components/Note'

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note}></Note> //added id to the Note component
        )}
      </ul>
    </div>
  )
}


export default App