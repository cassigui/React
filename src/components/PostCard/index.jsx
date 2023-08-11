import "./style.css"

export const PostCard = ({ cover, id, title, body }) => (
  <div className="post">
    <img src={cover} alt={title}></img>
    <div className="post-content">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  </div>
);