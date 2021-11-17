import React from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';
  
function OverViewCpn() {
  
    // State for Active index
    const [activeIndex, setActiveIndex] = React.useState(0);
  
    // State for Animation
    const [animating, setAnimating] = React.useState(false);
  
    // Sample items for Carousel
    const items = [
        {src: 
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190603152813/ml_gaming.png',
        },
        {src: 
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190528184201/gateexam.png',
        }
    ];
  
    // Items array length
    const itemLength = items.length - 1
  
    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
  
    // Carousel Item Data
    const carouselItemData = items.map((item) => {
        return (
            <CarouselItem
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });
  
    return (
        <div style={{
            display: 'block', padding: 30
        }}>
            <h1>ReactJS Reactstrap Carousel Component</h1>
            <Carousel previous={previousButton} next={nextButton} 
                activeIndex={activeIndex}>
                <CarouselIndicators items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
            </Carousel>
        </div >
    );
}
  
export default OverViewCpn;