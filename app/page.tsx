// import Image from "next/image";
// import Hero from "./Hero/Hero";

// export default function Home() {
//   return (
//     <div>
//       <Hero />
//     </div>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
  return (
    <Swiper navigation={true} spaceBetween={50} slidesPerView={3}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  );
}
