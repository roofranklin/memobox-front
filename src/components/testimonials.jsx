import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";

const handleDragStart = (e) => e.preventDefault();

const Testimonial = styled.div`
    background: #262626;
    aspect-ratio: 16/10;
    border-radius: 16px;
    margin-top: 70px;
    margin-right: 24px;
`

const testimonialItems = [
    <Testimonial key="01" onDragStart={handleDragStart} role="presentation"></Testimonial>,
    <Testimonial key="02" onDragStart={handleDragStart} role="presentation"></Testimonial>,
    <Testimonial key="03" onDragStart={handleDragStart} role="presentation"></Testimonial>,
];

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1.5 },
};

const Testimonials = () => {
  

    return (
        <AliceCarousel
            mouseTracking
            items={testimonialItems}
            responsive={responsive}
            autoPlayStrategy="default"
            animationType="slide"
            animationDuration={1000}
            disableButtonsControls
        />
         
    );
  };
  
  export default Testimonials;