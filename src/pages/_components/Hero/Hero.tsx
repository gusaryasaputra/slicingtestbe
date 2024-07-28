import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";

export default function Hero() {
  const imageSliders = [
    {
      id: 1,
      alt: "Slider 1",
      src: "/img/slider/image1.webp",
    },
    {
      id: 2,
      alt: "Slider 2",
      src: "/img/slider/image2.webp",
    },
    {
      id: 3,
      alt: "Slider 3",
      src: "/img/slider/image3.webp",
    },
    {
      id: 4,
      alt: "Slider 4",
      src: "/img/slider/image4.webp",
    },
  ];

  return (
    <section className="section-hero mt-2 pb-2">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {imageSliders.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={400}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
