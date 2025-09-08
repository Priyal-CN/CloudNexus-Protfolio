import React from 'react';

function Image({
  src="src\assets\lgg-removebg-preview.png",
  alt = "Image Name",
  className = "",
  ...props
}) {

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.src = "src\assets\lgg-removebg-preview.png"
      }}
      {...props}
    />
  );
}

export default Image;
