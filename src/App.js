import AsideNav from './Modules/main.js';
import NoteApp from './Modules/note-app.js';
import './Styles/CalculadorApp.css'
import './App.css';
import './Styles/AsideNav.css';
import './Styles/NotesApp.css';



function App() {
  return (
    <div className="App">
      <AsideNav />
      <NoteApp />
    </div>
  );
}

export default App;
