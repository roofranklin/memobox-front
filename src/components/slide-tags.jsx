import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";

const handleDragStart = (e) => e.preventDefault();

const Tag = styled.div`
    display: flex;
    height: 32px;
    padding: 4px 16px 6px 14px;
    margin: 0 4px;
    align-items: center;
    gap: 4px;
    border-radius: 50px;
    border: 1px solid #E9E9E9;
`

const Tags = [
    <Tag key="01" onDragStart={handleDragStart} role="presentation">Todos (101)</Tag>,
    <Tag key="02" onDragStart={handleDragStart} role="presentation">🧡 marketing (50)</Tag>,
    <Tag key="03" onDragStart={handleDragStart} role="presentation">🧡 marketing (50)</Tag>,
    <Tag key="04" onDragStart={handleDragStart} role="presentation">🧡 marketing (50)</Tag>,
    <Tag key="05" onDragStart={handleDragStart} role="presentation">🧡 marketing (50)</Tag>,
    <Tag key="06" onDragStart={handleDragStart} role="presentation">🧡 marketing (50)</Tag>,
    <Tag key="07" onDragStart={handleDragStart} role="presentation">🧡 marketing (50)</Tag>,
    <Tag key="08" onDragStart={handleDragStart} role="presentation">🧡 marketing (50)</Tag>,
    <Tag key="09" onDragStart={handleDragStart} role="presentation">🧡 marketing (50)</Tag>
];

const responsive = {
    0: { items: 2.5 },
    568: { items: 3.5 },
    1024: { items: 6.75 },
};

const SlideTags = () => {
    return (
        <AliceCarousel
            items={Tags}
            responsive={responsive}
            autoPlayStrategy="default"
            animationType="slide"
            animationDuration={1000}
        />       
    );
  };
  
  export default SlideTags;