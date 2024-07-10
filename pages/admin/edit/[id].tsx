import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const EditPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState('');

  useEffect(() => {
    // Obtener los detalles de la publicación usando el id
    setTitle('Existing post title');
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para editar la publicación
    router.push('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          className="border px-2 py-1 mb-4 w-full"
        />
        <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</Button>
      </form>
    </div>
  );
};

export default EditPost;
