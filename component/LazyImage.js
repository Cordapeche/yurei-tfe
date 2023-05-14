import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const LazyImage = ({ src, alt }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Load image only once when it comes into view
  });

  return (
    <div ref={ref}>
      {inView && (
        <Image
          src={src}
          alt={alt}
          layout='fill'
          objectFit='cover'
        />
      )}
    </div>
  );
};

export default LazyImage;