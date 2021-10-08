import { useState } from 'react';
import Education from './components/Education';
import Navbar from './components/Navbar';
import Programming from './components/Programming';
import CommentList from './components/CommentList';

function App() {
  const [comments, setComments] = useState([
    {
      title: 'New Site',
      body: 'Great job on the site!',
      author: 'Michael',
      id: 1,
    },
    {
      title: "What's up!",
      body: "Hey how's it goin?",
      author: 'Taylor',
      id: 2,
    },
    {
      title: 'Looks good',
      body: 'Love the new website!',
      author: 'Chelsea',
      id: 3,
    },
  ]);

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Education />
        <Programming />
        <CommentList comments={comments} />
      </div>
    </div>
  );
}

export default App;
