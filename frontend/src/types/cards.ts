export interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: string;
  hours: number;
  price: string;
  imageUrl: string;
}

export interface CourseCardProps {
  title: string;
  instructor: string;
  rating: string;
  hours: number;
  price: string;
  imageUrl: string;
}
