import Education from './components/Education';
import Navbar from './components/Navbar';
import Programming from './components/Programming';
import Comment from './components/Comments';
import Comments from './components/Comments';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Education />
        <Programming />
        <Comments />
      </div>
    </div>
  );
}

export default App;
