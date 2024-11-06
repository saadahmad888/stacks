// src/@types/lenis.d.ts or src/lenis.d.ts

declare module '@studio-freight/lenis' {
  export default class Lenis {
    constructor(options?: { duration?: number; easing?: (t: number) => number; smooth?: boolean; });
    raf(time: number): void;
  }
}
