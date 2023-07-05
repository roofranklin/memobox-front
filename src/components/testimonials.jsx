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
    padding: 24px;
`

const TestimonialInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
    flex: 1 0 0;
`

const Avatar = styled.img``

const Bio = styled.div`
    font-family: 'Mulish', sans-serif;
`

const Title = styled.h3`
    margin: 0;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    line-height: 150%;
`
const Subtitle = styled.h4`
    margin: 0;
    color: #E9E9E9;
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
`

const TestimonialText = styled.p`
    font-size: 16px;
    line-height: 150%;
    color: #FFFFFF;
`

const testimonialItems = [
    <Testimonial key="01" onDragStart={handleDragStart} role="presentation">
        <TestimonialInfo>
            <Avatar src="images/testimonials/max.png" alt='Foto Max' />
            <Bio>
                <Title>Max Moreira</Title>
                <Subtitle>Aposentado, 69 anos</Subtitle>
            </Bio>
        </TestimonialInfo>
        <TestimonialText>
            O Memobox simplifica meu estudo da Bíblia. Organizo e reviso facilmente trechos importantes para minhas pregações. Uma ferramenta indispensável para meu ministério.
        </TestimonialText>
    </Testimonial>,
    <Testimonial key="02" onDragStart={handleDragStart} role="presentation">
        <TestimonialInfo>
            <Avatar src="images/testimonials/juliana.png" alt='Foto Juliana' />
            <Bio>
                <Title>Juliana Souza</Title>
                <Subtitle>Amante de livros, 21 anos</Subtitle>
            </Bio>
        </TestimonialInfo>
        <TestimonialText>
        Estou usando o memobox para criar um repositório de exercícios, perguntas e respostas para facilitar a criação de algumas aulas e provas. Ta sendo positiva minha experiencia até aqui.
        </TestimonialText>
    </Testimonial>,
    <Testimonial key="03" onDragStart={handleDragStart} role="presentation">
        <TestimonialInfo>
            <Avatar src="images/testimonials/max.png" alt='Foto Max' />
            <Bio>
                <Title>Max Moreira</Title>
                <Subtitle>Aposentado, 69 anos</Subtitle>
            </Bio>
        </TestimonialInfo>
        <TestimonialText>
            O Memobox simplifica meu estudo da Bíblia. Organizo e reviso facilmente trechos importantes para minhas pregações. Uma ferramenta indispensável para meu ministério.
        </TestimonialText>
    </Testimonial>,
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