import { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

const CommentSection = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const { id } = useParams();
  const handleSubmit = async () => {
    try {
      const request = await fetch(
        "http://localhost/recipe app/Comments/create.php",
        {
          method: "POST",
          body: JSON.stringify({
            recipe_id: id,
            user_id: 1,
            comment: comment,
          }),
        }
      );
      const data = await request.text();
      console.log(data);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const api = async () => {
      const request = await fetch(
        "http://localhost/recipe app/Comments/readall.php",
        {
          method: "POST",
          body: JSON.stringify({ recipe_id: id }),
        }
      );
      const data = await request.json();
      setComments(data.comments);
      console.log(data);
    };
    api();
  }, []);

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      <div className="comments-list">
        {comments && comments.map((comment) => (
          <div className="comment-item">
            <div className="comment-author">{comment.username}</div>
            <div className="comment-text">comment: {comment.comment}</div>
          </div>
        ))}

        {/* <div className="comment-item">
          <div className="comment-author">comment auth</div>
          <div className="comment-text">text dfnjs</div>
          <div className="comment-date">date</div>
        </div> */}
      </div>
      <div className="comment-form">
        <input
          placeholder="Add your comment here..."
          onChange={(e) => {
            setComment(e.target.value);
            console.log(e.target.value);
            console.log(id);
          }}
        />
        <button onClick={handleSubmit}>Add Comment</button>
      </div>
    </div>
  );
};

export default CommentSection;
