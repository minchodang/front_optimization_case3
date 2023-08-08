import main_items from '../assets/main-items.jpg';
import main_items_webp from '../assets/main-items.webp';
import main_parts from '../assets/main-parts.jpg';
import main_parts_webp from '../assets/main-parts.webp';
import main_styles from '../assets/main-styles.jpg';
import main_styles_webp from '../assets/main-styles.webp';

import main1 from '../assets/main1.jpg';
import main1_webp from '../assets/main1.webp';
import main2 from '../assets/main2.jpg';
import main2_webp from '../assets/main2.webp';
import main3 from '../assets/main3.jpg';
import main3_webp from '../assets/main3.webp';

import { Card } from '../components/Card';

import { useEffect, useRef } from 'react';
import { BannerVideo } from '../components/BannerVideo';
import { Meta } from '../components/Meta';
import ThreeColumns from '../components/ThreeColumns';
import TwoColumns from '../components/TwoColumns';

const MainPage = () => {
  const imgRef1 = useRef<HTMLImageElement | null>(null);
  const imgRef2 = useRef<HTMLImageElement | null>(null);
  const imgRef3 = useRef<HTMLImageElement | null>(null);

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

    if (!imgRef1.current || !imgRef2.current || !imgRef3.current) {
      return;
    }
    observer.observe(imgRef1.current);
    observer.observe(imgRef2.current);
    observer.observe(imgRef3.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="MainPage -mt-16">
      <BannerVideo />
      <div className="mx-auto">
        <ThreeColumns
          columns={[
            <Card image={main1} webp={main1_webp}>
              롱보드는 아주 재밌습니다.
            </Card>,
            <Card image={main2} webp={main2_webp}>
              롱보드를 타면 아주 신납니다.
            </Card>,
            <Card image={main3} webp={main3_webp}>
              롱보드는 굉장히 재밌습니다.
            </Card>,
          ]}
        />
        <TwoColumns
          bgColor={'#f4f4f4'}
          columns={[
            <picture>
              <source data-srcset={main_items_webp} type="image/webp" />
              <img data-src={main_items} alt="mains" ref={imgRef1} />,
            </picture>,
            <Meta
              title={'Items'}
              content={
                '롱보드는 기본적으로 데크가 크기 때문에 입맛에 따라 정말 여러가지로 변형된 형태가 나올수 있습니다. 실제로 데크마다 가지는 모양, 재질, 무게는 천차만별인데, 본인의 라이딩 스타일에 맞춰 롱보드를 구매하시는게 좋습니다.'
              }
              btnLink={'/items'}
            />,
          ]}
        />
        <TwoColumns
          bgColor={'#fafafa'}
          columns={[
            <Meta
              title={'Parts of Longboard'}
              content={
                '롱보드는 데크, 트럭, 휠, 킹핀, 베어링 등 여러 부품들로 구성됩니다. 롱보드를 타다보면 조금씩 고장나는 부품이 있기 마련인데, 이럴때를 위해 롱보들의 부품들에 대해서 알고 있으면 큰 도움이 됩니다.'
              }
              btnLink={'/part'}
            />,
            <picture>
              <source data-srcset={main_parts_webp} type="image/webp" />
              <img data-src={main_parts} alt="main-part" ref={imgRef2} />,
            </picture>,
          ]}
          mobileReverse={true}
        />
        <TwoColumns
          bgColor={'#f4f4f4'}
          columns={[
            <picture>
              <source data-srcset={main_styles_webp} type="image/webp" />
              <img data-src={main_styles} ref={imgRef3} alt="main-style" />
            </picture>,
            <Meta
              title={'Riding Styles'}
              content={
                '롱보드 라이딩 스타일에는 크게 프리스타일, 다운힐, 프리라이딩, 댄싱이 있습니다. 보통 롱보드는 라이딩 스타일에 따라 데크의 모양이 조금씩 달라집니다. 많은 롱보드 매니아들이 각 쓰임새에 맞는 보드들을 소유하고 있습니다.'
              }
              btnLink={'/riding-styles'}
            />,
          ]}
        />
      </div>
    </div>
  );
};

export default MainPage;
