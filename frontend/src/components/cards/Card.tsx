import { CourseCardProps } from '@/types/cards';
import { getRatingNumber } from '@/utils/functions';

export const CourseCard = ({
  title,
  instructor,
  rating,
  hours,
  price,
  imageUrl
}: CourseCardProps) => {
  return (
    <div className="w-full h-full sm:w-[45%] lg:w-[22%] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img
        className="w-full object-cover"
        src={imageUrl}
        alt={`${title} course`}
      />
      <div className="p-1 h-40">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">By {instructor}</p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-400">{rating}</span>
          <span className="text-gray-500 text-sm ml-1">
            ({getRatingNumber(rating)})
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">{hours} hours</span>
          <span className="font-bold text-blue-600">${price}</span>
        </div>
      </div>
    </div>
  );
};
