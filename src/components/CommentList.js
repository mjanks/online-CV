const CommentList = ({ comments }) => {
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

export default CommentList;
