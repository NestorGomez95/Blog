import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para crear la publicación
    router.push('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create Post</h1>
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

export default CreatePost;
