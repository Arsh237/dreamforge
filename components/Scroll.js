import React, { useState, useEffect } from 'react';

const images = [
  ' https://img.freepik.com/free-vector/running-club-twitch-banner_23-2151061246.jpg?t=st=1721313883~exp=1721317483~hmac=d21a030af9cf680b3fa67e1dd8c5d80650a0ac39c66511405977672bc4fa611a&w=1380',
  ' https://img.freepik.com/premium-photo/retail-environment_931878-77125.jpg?w=1380',
  ' https://graphicsfamily.com/wp-content/uploads/edd/2022/12/E-commerce-Facebook-Cover-Design-Template-870x489.jpg ',
  'https://dynamic.brandcrowd.com/template/preview/design/b9c05726-281b-435a-8f01-07313807bf16/f2e8fd7e-ef15-4fcc-942c-d7159b817603?v=4&designTemplateVersion=1&logoTemplateVersion=8&size=design-preview-wide-2x '
];

const Scroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className=" sticky top-[62px] flex justify-center items-center h-64  bg-gray-200  z-10 mt-16"  >
      <img
        src={images[currentIndex]}
        alt="Scroll image"
        className="w-[1500px] max-h-full rounded-lg shadow-lg transition-opacity duration-2000 ease-in-out  "
      />
    </div>
  );
};

export default Scroll;
