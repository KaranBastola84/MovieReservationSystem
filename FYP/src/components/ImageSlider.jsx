import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
    '/images/pexels1.jpg',
    '/images/pexels2.jpg',
    '/images/pexels3.jpg',
    '/images/pexels4.jpg',
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showSlide = (index) => {
        if (index < 0) {
            setCurrentIndex(images.length - 1);
        } else if (index >= images.length) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(index);
        }
    };

    return (
        <div className="relative w-full h-96 mt-5 overflow-hidden">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover bg-black" />
                </div>
            ))}
            <button
                onClick={() => showSlide(currentIndex - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full"
            >
                <FaArrowLeft />
            </button>
            <button
                onClick={() => showSlide(currentIndex + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full"
            >
                <FaArrowRight />
            </button>
        </div>
    );
};

export default ImageSlider;
