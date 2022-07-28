import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home',  'testimonial','about', 'work', 'skills', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#8797CB' } : {}}
      />
    ))}
  </div>
);
  


export default NavigationDots;
