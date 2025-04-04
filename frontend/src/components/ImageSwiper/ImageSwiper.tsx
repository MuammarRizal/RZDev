'use client';

import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

// Import CSS Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SwiperImage {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
}

interface ImageSwiperProps extends Partial<SwiperProps> {
  images: SwiperImage[];
  className?: string;
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
}

export default function ImageSwiper({
  images,
  className = '',
  autoplayDelay = 2500,
  showPagination = true,
  showNavigation = true,
  modules = [EffectFade, Autoplay],
  ...swiperProps
}: ImageSwiperProps) {
  const allModules = [...modules];
  if (showPagination) allModules.push(Pagination);
  if (showNavigation) allModules.push(Navigation);

  return (
    <Swiper
      effect={'fade'}
      centeredSlides={true}
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false
      }}
      pagination={
        showPagination
          ? {
              clickable: true,
              dynamicBullets: true
            }
          : false
      }
      navigation={showNavigation}
      modules={allModules}
      className={`mySwiper ${className}`}
      {...swiperProps}
    >
      {images.map((image, index) => (
        <SwiperSlide key={`swiper-slide-${index}`}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={`swiper-image content-slide-${index + 1}`}
            priority={index === 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
