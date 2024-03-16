import { CardProductInfo } from "@/component/items/card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container } from "@mui/material";

const TestPage = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={6}
        grid={{ rows: 2, fill: "row" }}
        grabCursor={true}
      >
        <SwiperSlide style={{ background: "red" }}>
          <CardProductInfo
            id={1}
            name="wlawjf;lskjf;;"
            imgPath="/images/1.jpg"
            description="asfajflkdajfs;adfjdas;lfjasfd;lasjf"
            price={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProductInfo
            id={1}
            name="wlawjf;lskjf;;"
            imgPath="/images/1.jpg"
            description="asfajflkdajfs;adfjdas;lfjasfd;lasjf"
            price={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProductInfo
            id={1}
            name="wlawjf;lskjf;;"
            imgPath="/images/1.jpg"
            description="asfajflkdajfs;adfjdas;lfjasfd;lasjf"
            price={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProductInfo
            id={1}
            name="wlawjf;lskjf;;"
            imgPath="/images/1.jpg"
            description="asfajflkdajfs;adfjdas;lfjasfd;lasjf"
            price={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProductInfo
            id={1}
            name="wlawjf;lskjf;;"
            imgPath="/images/1.jpg"
            description="asfajflkdajfs;adfjdas;lfjasfd;lasjf"
            price={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProductInfo
            id={1}
            name="wlawjf;lskjf;;"
            imgPath="/images/1.jpg"
            description="asfajflkdajfs;adfjdas;lfjasfd;lasjf"
            price={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProductInfo
            id={1}
            name="wlawjf;lskjf;;"
            imgPath="/images/1.jpg"
            description="asfajflkdajfs;adfjdas;lfjasfd;lasjf"
            price={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProductInfo
            id={1}
            name="wlawjf;lskjf;;"
            imgPath="/images/1.jpg"
            description="asfajflkdajfs;adfjdas;lfjasfd;lasjf"
            price={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProductInfo
            id={1}
            name="wlawjf;lskjf;;"
            imgPath="/images/1.jpg"
            description="asfajflkdajfs;adfjdas;lfjasfd;lasjf"
            price={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProductInfo
            id={1}
            name="wlawjf;lskjf;;"
            imgPath="/images/1.jpg"
            description="asfajflkdajfs;adfjdas;lfjasfd;lasjf"
            price={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProductInfo
            id={1}
            name="wlawjf;lskjf;;"
            imgPath="/images/1.jpg"
            description="asfajflkdajfs;adfjdas;lfjasfd;lasjf"
            price={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProductInfo
            id={1}
            name="wlawjf;lskjf;;"
            imgPath="/images/1.jpg"
            description="asfajflkdajfs;adfjdas;lfjasfd;lasjf"
            price={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProductInfo
            id={1}
            name="wlawjf;lskjf;;"
            imgPath="/images/1.jpg"
            description="asfajflkdajfs;adfjdas;lfjasfd;lasjf"
            price={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardProductInfo
            id={1}
            name="wlawjf;lskjf;;"
            imgPath="/images/1.jpg"
            description="asfajflkdajfs;adfjdas;lfjasfd;lasjf"
            price={100}
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default TestPage;
