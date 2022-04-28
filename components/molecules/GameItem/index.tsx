import Image from 'next/image';
import Link from 'next/link';

interface GameItemProps {
//   console: 'console1' | 'console2' | 'console3' | 'console4' | 'console5';
  img: 'Thumbnail-1' | 'Thumbnail-2' | 'Thumbnail-3' | 'Thumbnail-4' | 'Thumbnail-5'
  title: string;
  subtitle: string;
}

// eslint-disable-next-line react/function-component-definition
export default function GameItem(props : GameItemProps) {
  const {
    img, title, subtitle,
  } = props;
  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <a>
          <div className="blur-sharp">
            <Image
              className="thumbnail"
              src={`/img/${img}.png`}
              width={205}
              height={270}
              alt="thumbnail"
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image
                  src="/icon/console3.svg"
                  width={54}
                  height={36}
                  alt="console"
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{subtitle}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
