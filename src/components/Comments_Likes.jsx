import React, { useState } from "react";

function Comments_Likes({ video }) {
  const likeUp = video.upvotes;
  const likeDown = video.downvotes;
  const [upLike, setUpLike] = useState(likeUp);
  const [downLike, setDownLike] = useState(likeDown);
  const [comments, setComments] = useState(false);
  const [visible, setVisible] = useState(true);
  function handleUp() {
    setUpLike(upLike + 1 )
  }

  function handleDown() {
    setDownLike(downLike + 1)
  }

  function handleComments() {
    setComments(comments => !comments);
    setVisible(visible => !visible)
  }

  const listComments = video.comments.map((com) => (
    <div key={com.id}>
      <h1>{com.user}</h1>
      <p>{com.comment}</p>
    </div>
  ));
  return (
    <div className="Comments_Likes">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        allowFullScreen
        title="Thinking in React"
      />
      <p>
        {video.views} views | Uploaded {video.createdAt}
      </p>

      <button onClick={handleUp}>👍 {upLike}</button>
      <button onClick={handleDown}>👎 {downLike}</button>
      <button onClick={handleComments}>
        {comments ? "Hide Comments" : "Show Comments"}
      </button>
      {visible ? listComments : ""}
    </div>
  );
}

export default Comments_Likes;
