import React, { useEffect, useState } from 'react';
import { Products } from './components/Products';
import { EventImages } from './components/EventImages';
import './main.scss';

const Main = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      currentImageIndex >= EVENTIMAGES.length - 1
        ? setCurrentImageIndex(0)
        : setCurrentImageIndex(prev => prev + 1);
    }, 2000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <div className="main">
      <div className="imageWrap">
        <div
          className="eventImages"
          style={{ transform: `translateX(${currentImageIndex * -100}vw)` }}
        >
          {EVENTIMAGES.map(({ id, src, alt }) => (
            <EventImages key={id} src={src} alt={alt} />
          ))}
        </div>
      </div>
      <div className="productsList">
        <Products productName="따끈따끈한 신상" />
        <div className="adBanner">
          <span className="bannerComment">Do you wanna go camping?</span>
          <img className="bannerImg" src="./images/선물.png" alt="선물" />
        </div>
        <Products productName="지갑은 가볍게 양손은 무겁게" />
      </div>
    </div>
  );
};
export default Main;

const EVENTIMAGES = [
  { id: 1, src: './images/10.jpg', alt: '하늘' },
  { id: 2, src: './images/12.jpg', alt: '바다' },
  { id: 3, src: './images/14.jpg', alt: '하늘과 바다' },
];
