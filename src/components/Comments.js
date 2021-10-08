import { useState } from 'react';

const Comments = () => {
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
    <div className='container'>
      <h1>Comments</h1>
      {comments.map(comment => (
        <div className='comment-preview' key={comment.id}>
          <h2>{comment.title}</h2>
          <p>Posted by: {comment.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
