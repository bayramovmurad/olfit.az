import BodyPart from "./BodyPart"
import 'swiper/css';
import 'swiper/css/navigation';
import './exercise.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


const ExerciseBodyParts = ({ bodyParts, bodyPart, setBodyPart }) => {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            spaceBetween={0}
            slidesPerView={4}
            className="flex max-w-[1200px] mx-auto px-10">
            {bodyParts.map((item) => (
                <SwiperSlide key={item || item.id}>
                    <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
export default ExerciseBodyParts