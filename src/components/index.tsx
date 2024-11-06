import React, { useRef, useEffect, ReactNode } from 'react';
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

interface AppProps {
  children: ReactNode; // Define the children prop
}

const Outer: React.FC<AppProps> = ({ children }) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container}>
      {children}
    </main>
  );
};

export default Outer;
