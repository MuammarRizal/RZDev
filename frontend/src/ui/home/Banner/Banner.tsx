import style from '@/ui/home/Banner/banner.module.scss';
import { image_swiper } from '@/data/dataSwiper';
import './swiper.scss';
import ImageSwiper from '@/components/ImageSwiper/ImageSwiper';

function BannerHomepage() {
  const propsSwiper = {
    autoplayDelay: 2500,
    showPagination: false,
    showNavigation: false,
    effect: 'fade',
    centeredSlides: true
  };

  return (
    <div className={style.container__banner}>
      <div className={style.content_1}>
        <div className={style.text_container}>
          <div className={style.title}>Unlock Your Potential with Byway</div>
          <div className={style.description}>
            Welcome to RzDev, where learning knows no bounds. We believe that
            education is the key to personal and professional growth, and we're
            here to guide you on your journey to success.
          </div>
          <div className="button_container">
            <button>Start your instructor journey</button>
          </div>
        </div>
      </div>

      <div className={style.content_2}>
        <ImageSwiper {...propsSwiper} images={image_swiper} />
      </div>
    </div>
  );
}

export default BannerHomepage;
