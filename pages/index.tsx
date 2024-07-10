import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';

type Post = {
  id: number;
  title: string;
};

const IndexPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Obtener las publicaciones desde una API o base de datos
    setPosts([
      { id: 1, title: 'First Post' },
      { id: 2, title: 'Second Post' },
    ]);
  }, []);

  const deletePost = (id: number) => {
    // Lógica para eliminar la publicación
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Posts</h1>
      {posts.map(post => (
        <PostCard key={post.id} id={post.id} title={post.title} onDelete={deletePost} />
      ))}
    </div>
  );
};

export default IndexPage;

