// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";
import ProductCard from "./ProductCard";

export default function ProductsSwiper({ products, mdCount, lgCount }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: mdCount },
          1024: { slidesPerView: lgCount },
        }}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {products.slice(0, 10).map((p) => {
          return (
            <SwiperSlide>
              <ProductCard key={p.id} product={p} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
