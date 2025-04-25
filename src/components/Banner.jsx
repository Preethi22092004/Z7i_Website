import React from 'react';
// Remove the incorrect import and update how we reference public assets
// const defaultBanner = './images/Z7i_hero_section.png';

const Banner = ({ title, subtitle, backgroundImage, imagePosition }) => {
  // Default values if props are not provided
  const bannerTitle = title || 'Welcome to Z7i';
  const bannerSubtitle = subtitle || 'Empowering Education, Inspiring Success';
  // Use path to image in public folder
  const bannerImage = backgroundImage || '/images/Z7i_hero_section.png';
  
  // Default image position
  const position = imagePosition || { x: '50%', y: '50%' };
  
  // Build the object position string for CSS
  const objectPosition = `${position.x || '50%'} ${position.y || '50%'}`;

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt={bannerTitle}
          className="w-full h-full object-cover"
          style={{
            width: '100%',
            height: '100%',
            objectPosition: objectPosition,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 tracking-wide">{bannerTitle}</h1>
            <p className="text-2xl font-light">{bannerSubtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;