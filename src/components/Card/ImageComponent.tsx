import { useState, useEffect, FC } from 'react';

type TImageProps = {
  src: string;
  placeholder: string;
  alt: string;
};

export const ImageComponent: FC<TImageProps> = ({ src, placeholder, alt }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
    img.onerror = () => {
      setImageSrc(placeholder);
    };
  }, [src]);

  return <img src={imageSrc} alt={alt} loading="lazy" />;
};
