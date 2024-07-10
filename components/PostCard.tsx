import Link from 'next/link';
import { Button } from './ui/button'; 

type PostCardProps = {
  id: number;
  title: string;
  onDelete: (id: number) => void;
};

const PostCard = ({ id, title, onDelete }: PostCardProps) => {
  return (
    <div className="mb-4 flex justify-between items-center bg-white p-4 rounded shadow">
      <Link href={`/post/${id}`}>
        <a className="text-blue-500 hover:underline">{title}</a>
      </Link>
      <Button onClick={() => onDelete(id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</Button>
    </div>
  );
};

export default PostCard;
