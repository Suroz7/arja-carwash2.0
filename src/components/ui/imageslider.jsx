import '../ui/button.css'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'
import img6 from '../images/img6.jpeg'
import img7 from '../images/img7.jpeg'
import img8 from '../images/img8.jpeg'
import img9 from '../images/img9.jpeg'
import img10 from '../images/img10.jpeg'
import img11 from '../images/img11.jpeg'
import img12 from '../images/img12.jpeg'
import img13 from '../images/img13.jpeg'
import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
    const images = [
        { src: img1, alt: "Image 1" },
        { src: img2, alt: "Image 2" },
        { src: img3, alt: "Image 3" },
        { src: img4, alt: "Image 4" },
        { src: img5, alt: "Image 5" },
        { src: img6, alt: "Image 6" },
        { src: img7, alt: "Image 7" },
        { src: img8, alt: "Image 8" },
        { src: img9, alt: "Image 9" },
        { src: img10, alt: "Image 10" },
        { src: img11, alt: "Image 11" },
        { src: img12, alt: "Image 12" },
        { src: img13, alt: "Image 13" }
    ];

    const [currentDivIndex, setCurrentDivIndex] = useState(0);

    const handleScroll = (e) => {
        // Prevent page scroll when scrolling on the image slider
        e.preventDefault();

        if (e.deltaY < 0) {
            // Scroll up: show previous image
            setCurrentDivIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        } else {
            // Scroll down: show next image
            setCurrentDivIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    };

    // Add event listener for wheel scroll
    useEffect(() => {
        const container = document.querySelector('.container-P');
        if (container) {
            container.addEventListener('wheel', handleScroll, { passive: false });
        }
        return () => {
            if (container) {
                container.removeEventListener('wheel', handleScroll);
            }
        };
    }, []);

    return (
        <div className="container-P">
            <div className="content-P">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={index === currentDivIndex ? 'visible' : 'hidden'}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
