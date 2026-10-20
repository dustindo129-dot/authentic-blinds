'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const SLIDES = [
  { src: '/images/gallery/slide-01-shutters-living.jpg',        alt: 'White plantation shutters in a warm DFW living room' },
  { src: '/images/gallery/slide-02-shutters-arched.jpg',        alt: 'Custom arched plantation shutters with specialty top panels' },
  { src: '/images/gallery/slide-03-shutters-dining-arch.jpg',   alt: 'Arched plantation shutter in an elegant dining room' },
  { src: '/images/gallery/slide-04-shutters-triple-arch.jpg',   alt: 'Triple arched shutters above a formal dining table' },
  { src: '/images/gallery/slide-05-shutters-cathedral.jpg',     alt: 'Cathedral arch window plantation shutters in a living room' },
  { src: '/images/gallery/slide-06-shutters-entry.jpg',         alt: 'Plantation shutter sidelights framing a front entry door' },
  { src: '/images/gallery/slide-07-shutters-modern.jpg',        alt: 'Contemporary black-frame plantation shutters with chandelier' },
  { src: '/images/gallery/slide-08-roller-luxury.jpg',          alt: 'Modern roller shades in a luxury marble dining room' },
  { src: '/images/gallery/slide-09-shutters-bedroom.jpg',       alt: 'Plantation shutters in a master bedroom bay window' },
  { src: '/images/gallery/slide-10-shutters-bay.jpg',           alt: 'Bay window plantation shutters on a staircase landing' },
  { src: '/images/gallery/slide-11-shutters-cathedral-2.jpg',   alt: 'Cathedral arch shutters in a cozy living room' },
  { src: '/images/gallery/slide-12-shutters-sunburst.jpg',      alt: 'Sunburst arch shutters in a bright dining room' },
  { src: '/images/gallery/slide-13-zebra-installed.jpg',        alt: 'Zebra roller shades installed in a bright modern home' },
  { src: '/images/gallery/slide-14-outdoor-screens.jpg',        alt: 'Exterior outdoor roller screens enclosing a covered porch' },
  { src: '/images/gallery/slide-15-drapes-living.jpg',          alt: 'Floor-to-ceiling drapes in a luxury two-story living room' },
  { src: '/images/gallery/slide-16-shutters-commercial.jpg',    alt: 'Custom arched plantation shutters in a commercial space' },
  { src: '/images/gallery/slide-17-shutters-restaurant.jpg',    alt: 'Dark plantation shutters lining a fine dining restaurant' },
  { src: '/images/gallery/slide-18-outdoor-barn.jpg',           alt: 'Exterior roller screens on a pool house barn structure' },
  { src: '/images/gallery/slide-19-shutters-newbuild.jpg',      alt: 'Plantation shutters filling an entire wall in a DFW new build' },
  { src: '/images/gallery/slide-20-roller-salon.jpg',           alt: 'Roller shades in a modern commercial nail salon' },
];

const AUTO_MS = 3500;
const TOTAL = SLIDES.length;
const getPerView = (w) => (w >= 1024 ? 3 : w >= 640 ? 2 : 1);

export default function PhotoCarousel() {
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(1);
  const [anim, setAnim] = useState(false);
  const [mounted, setMounted] = useState(false);

  const indexRef = useRef(1);
  const perRef = useRef(1);
  const touchX = useRef(null);

  const slides = useMemo(
    () => [...SLIDES.slice(-perView), ...SLIDES, ...SLIDES.slice(0, perView)],
    [perView]
  );

  useEffect(() => { indexRef.current = index; }, [index]);

  useEffect(() => {
    const c = getPerView(window.innerWidth);
    perRef.current = c;
    setPerView(c);
    indexRef.current = c;
    setIndex(c);
    setAnim(true);
    setMounted(true);
  }, []);

  useEffect(() => {
    const onResize = () => {
      const c = getPerView(window.innerWidth);
      if (c !== perRef.current) {
        perRef.current = c;
        setPerView(c);
        setAnim(false);
        indexRef.current = c;
        setIndex(c);
        requestAnimationFrame(() => setAnim(true));
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const t = setInterval(() => setIndex((p) => p + 1), AUTO_MS);
    return () => clearInterval(t);
  }, [mounted]);

  const handleEnd = useCallback(() => {
    const idx = indexRef.current;
    const c = perRef.current;
    if (idx >= TOTAL + c) {
      setAnim(false);
      indexRef.current = c;
      setIndex(c);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)));
    }
    if (idx < c) {
      setAnim(false);
      const next = TOTAL + idx;
      indexRef.current = next;
      setIndex(next);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)));
    }
  }, []);

  const goTo = useCallback((i) => { indexRef.current = i; setIndex(i); }, []);
  const prev = useCallback(() => goTo(indexRef.current - 1), [goTo]);
  const next = useCallback(() => goTo(indexRef.current + 1), [goTo]);

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const delta = touchX.current - e.changedTouches[0].clientX;
    touchX.current = null;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
  };

  const activeDot = ((index - perView) % TOTAL + TOTAL) % TOTAL;

  if (!mounted) return null;

  return (
    <section className="carousel-section">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Our Work</p>
          <h2 className="section__title">Real Installations Across DFW</h2>
          <p className="section__lead">
            Every photo is a real job completed by our licensed crew — no stock photos.
          </p>
        </div>

        <div className="carousel">
          {/* Track */}
          <div
            className="carousel__track-wrap"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="carousel__track"
              style={{
                transform: `translateX(-${(index * 100) / perView}%)`,
                transition: anim ? 'transform 600ms ease' : 'none',
              }}
              onTransitionEnd={handleEnd}
            >
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="carousel__slide"
                  style={{ flex: `0 0 ${100 / perView}%` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    loading="lazy"
                    className="carousel__img"
                  />
                </div>
              ))}
            </div>

            <button type="button" className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Previous">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12.79 15.71a1 1 0 0 1-1.42 0l-5-5a1 1 0 0 1 0-1.42l5-5a1 1 0 1 1 1.42 1.42L8.5 10l4.29 4.29a1 1 0 0 1 0 1.42Z" /></svg>
            </button>
            <button type="button" className="carousel__btn carousel__btn--next" onClick={next} aria-label="Next">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M7.21 4.29a1 1 0 0 1 1.42 0l5 5a1 1 0 0 1 0 1.42l-5 5a1 1 0 0 1-1.42-1.42L11.5 10 7.21 5.71a1 1 0 0 1 0-1.42Z" /></svg>
            </button>
          </div>

          {/* Dots */}
          <div className="carousel__dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel__dot ${activeDot === i ? 'carousel__dot--active' : ''}`}
                onClick={() => goTo(i + perView)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
