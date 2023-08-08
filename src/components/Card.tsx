import { useEffect, useRef } from 'react';

interface Props {
  image: string;
  webp: string;
  children: React.ReactNode;
}

export const Card = (props: Props) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {};
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement;
          if (target.dataset.src) {
            target.src = target.dataset.src;
            if (
              target.previousSibling instanceof HTMLSourceElement &&
              target.previousSibling.dataset.srcset
            ) {
              console.log('intersecting', target.previousSibling.dataset.srcset);
              // 수정된 타입 가드
              (target.previousSibling as HTMLSourceElement).srcset =
                target.previousSibling.dataset.srcset;
            }
            observer.unobserve(target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="Card text-center">
      <picture>
        <source data-srcset={props.webp} type="image/webp" />
        <img data-src={props.image} alt="card" ref={imgRef} />
      </picture>
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
};
