import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const ListCard = ({ item }) => {
  return (
    <Link href="/practice">
        <div className="flex justify-between items-center shadow-lg rounded-lg mb-2 p-4 border border-background hover:cursor-pointer hover:shadow-xl">
        <div className="text-lg font-semibold">{item.name}</div>
        <div className="transition-colors duration-200">
            <FaArrowRight className="text-xl" />
        </div>
        </div>
    </Link>
  );
}

export default ListCard;
