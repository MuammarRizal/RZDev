import Image from 'next/image';
import './categories.scss';
import Icon from '@/assets/images/icons/icon-1.png';
function Categories() {
  const categories_data = [
    {
      icon: Icon,
      title: 'Astrology',
      courses: '11 Courses'
    },
    {
      icon: Icon,
      title: 'Development',
      courses: '11 Courses'
    },
    {
      icon: Icon,
      title: 'Marketing',
      courses: '11 Courses'
    },
    {
      icon: Icon,
      title: 'Physics',
      courses: '11 Courses'
    }
  ];
  return (
    <div className="container__categories">
      <div className="title_categories">
        <div className="title heading_3">Top Categories</div>
        <div className="link_categories">
          <a href="#" className="button_text">
            See All
          </a>
        </div>
      </div>
      <div className="body_categories">
        {categories_data.map((item, index) => {
          return (
            <a href="#" className={`item item-${index + 1}`} key={index}>
              <div className="icon">
                <Image src={item.icon} alt={item.title} />
              </div>
              <div className="title heading_4">{item.title}</div>
              <div className="courses text_paragraph">{item.courses}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
