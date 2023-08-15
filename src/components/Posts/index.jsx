import { PostCard } from "../PostCard";
import "./styles.css";

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      // Render retorna apenas um elemento, entao precisa do root,
      // que neste caso é a div
      <PostCard
        key={post.id}
        title={post.title}
        id={post.id}
        body={post.body}
        cover={post.cover}
      />
    ))}
  </div>
)

