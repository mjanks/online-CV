import Education from './components/Education';
import Navbar from './components/Navbar';
import Programming from './components/Programming';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Education />
        <Programming />
        <Hobbies />
      </div>
    </div>
  );
}

export default App;
