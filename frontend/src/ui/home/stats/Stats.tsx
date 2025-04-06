import './stats.scss';

function Stats() {
  const data_stats = [
    {
      title: '250+',
      desc: 'Courses by our best mentors'
    },
    {
      title: '1000+',
      desc: 'Courses by our best mentors'
    },
    {
      title: '15+',
      desc: 'Courses by our best mentors'
    },
    {
      title: '2400+',
      desc: 'Courses by our best mentors'
    }
  ];
  return (
    <div className="container__stats">
      {data_stats.map((data, index) => {
        return (
          <div
            className={`data_stats data_stat-${index + 1} ${data_stats.length !== index + 1 ? 'border_separator' : ''}`}
            key={index}
          >
            <div className="title heading_2">{data.title}</div>
            <div className="description small_text">{data.desc}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Stats;
