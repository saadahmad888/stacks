import React, { useRef, useEffect, ReactNode } from 'react';

interface AppProps {
  children: ReactNode;
}

const Outer: React.FC<AppProps> = ({ children }) => {
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <main ref={container}>
      {children}
    </main>
  );
};

export default Outer;
