import React, { useState } from 'react';

const images = [
  'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
  'https://i.redd.it/tc0aqpv92pn21.jpg',
  'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
  'https://images7.alphacoders.com/878/878663.jpg',
  'https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg',
  'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
  'https://i.redd.it/tc0aqpv92pn21.jpg',
  'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
  'https://images7.alphacoders.com/878/878663.jpg',
  'https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg',
  'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
  'https://i.redd.it/tc0aqpv92pn21.jpg',
  'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
  'https://images7.alphacoders.com/878/878663.jpg',
  'https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg'
];

const MainScreen = () => {
  const [queue, setQueue] = useState(images.slice(0, 5));
  const [backgroundImage, setBackgroundImage] = useState(queue[4]); // Start with the last image of the initial queue
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setQueue((prevQueue) => {
      const [firstImage, ...restQueue] = prevQueue;
      const updatedQueue = [...restQueue, firstImage];
      setBackgroundImage(updatedQueue[0]); // Update background image to the new first image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % updatedQueue.length);
      return updatedQueue;
    });
  };

  const handlePrev = () => {
    setQueue((prevQueue) => {
      const lastImage = prevQueue[prevQueue.length - 1];
      const updatedQueue = [lastImage, ...prevQueue.slice(0, -1)];
      setBackgroundImage(updatedQueue[0]); // Update background image to the new first image
      setCurrentIndex((prevIndex) => (prevIndex - 1 + updatedQueue.length) % updatedQueue.length);
      return updatedQueue;
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 flex items-center justify-end p-4">
        <div className="relative w-1/2 h-full">
          <div className="overflow-hidden w-full h-full relative">
            <div className="h-full flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 4}%)` }}>
              {queue.map((img, index) => (
                <div key={index} className="flex-shrink-0 w-1/2 px-2">
                  <div className="w-full h-2/3 bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={img} alt={`slide-${index}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Buttons positioned at the center bottom of the main screen */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            className="bg-black text-white px-4 py-2"
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            className="bg-black text-white px-4 py-2"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
