import { CourseCard } from '@/components/cards/Card';
import Image from 'next/image';

function Courses() {
  const courses = [
    {
      id: 1,
      title: 'Web Design Fundamentals',
      instructor: 'John Doe',
      rating: '★★★★☆',
      hours: 12,
      price: '49.99',
      imageUrl:
        'https://biggerbetterbanner.com/wp-content/uploads/2024/08/2-x-8-Vinyl-Banner-24-inches-by-96-inches-Bigger-Better-Banner-Custom-Banner-Printing-www.biggerbetterbanner.com_-scaled.jpg'
    },
    {
      id: 2,
      title: 'JavaScript Mastery',
      instructor: 'Sarah Smith',
      rating: '★★★★★',
      hours: 18,
      price: '59.99',
      imageUrl:
        'https://biggerbetterbanner.com/wp-content/uploads/2024/08/2-x-8-Vinyl-Banner-24-inches-by-96-inches-Bigger-Better-Banner-Custom-Banner-Printing-www.biggerbetterbanner.com_-scaled.jpg'
    },
    {
      id: 3,
      title: 'UX/UI Principles',
      instructor: 'Michael Brown',
      rating: '★★★☆☆',
      hours: 10,
      price: '39.99',
      imageUrl:
        'https://biggerbetterbanner.com/wp-content/uploads/2024/08/2-x-8-Vinyl-Banner-24-inches-by-96-inches-Bigger-Better-Banner-Custom-Banner-Printing-www.biggerbetterbanner.com_-scaled.jpg'
    },
    {
      id: 4,
      title: 'Python for Beginners',
      instructor: 'Emily Johnson',
      rating: '★★★★☆',
      hours: 15,
      price: '54.99',
      imageUrl:
        'https://biggerbetterbanner.com/wp-content/uploads/2024/08/2-x-8-Vinyl-Banner-24-inches-by-96-inches-Bigger-Better-Banner-Custom-Banner-Printing-www.biggerbetterbanner.com_-scaled.jpg'
    }
  ];
  return (
    <div className="container__courses container">
      <div className="heading flex justify-between">
        <div className="title-courses text-4xl">Top Courses</div>
        <div className="see-all">See All</div>
      </div>
      <div className="body-courses">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Our Courses</h1>

          <div className="flex flex-wrap justify-center gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                instructor={course.instructor}
                rating={course.rating}
                hours={course.hours}
                price={course.price}
                imageUrl={course.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
