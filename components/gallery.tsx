import { useEffect, useState } from 'react';

interface Props {
  isHidden: boolean;
}

function Gallery({ isHidden }: Props) {
  const [currentImg, setCurrentImg] = useState<string>('image-product-1.jpg');

  const images: string[] = [
    'image-product-1.jpg',
    'image-product-2.jpg',
    'image-product-3.jpg',
    'image-product-4.jpg',
  ];

  useEffect(() => {
    const img1 = document.getElementById('modalImg0');
    const img2 = document.getElementById('modalImg1');
    const img3 = document.getElementById('modalImg2');
    const img4 = document.getElementById('modalImg3');

    const activeClass: string[] = [
      'border-[2px]',
      'border-orange',
      'bg-pale-orange',
    ];

    function reset(): void {
      img1?.classList.remove(...activeClass);
      img1?.children[0].classList.remove('opacity-25');

      img2?.classList.remove(...activeClass);
      img2?.children[0].classList.remove('opacity-25');

      img3?.classList.remove(...activeClass);
      img3?.children[0].classList.remove('opacity-25');

      img4?.classList.remove(...activeClass);
      img4?.children[0].classList.remove('opacity-25');
    }

    if (currentImg === 'image-product-1.jpg') {
      reset();
      img1?.classList.add(...activeClass);
      img1?.children[0].classList.add('opacity-25');
    }
    if (currentImg === 'image-product-2.jpg') {
      reset();
      img2?.classList.add(...activeClass);
      img2?.children[0].classList.add('opacity-25');
    }
    if (currentImg === 'image-product-3.jpg') {
      reset();
      img3?.classList.add(...activeClass);
      img3?.children[0].classList.add('opacity-25');
    }
    if (currentImg === 'image-product-4.jpg') {
      reset();
      img4?.classList.add(...activeClass);
      img4?.children[0].classList.add('opacity-25');
    }
  }, [currentImg]);

  useEffect(() => {
    const modal = document.getElementById('galleryModal');
    if (isHidden) {
      modal?.classList.add('hidden');
    } else {
      modal?.classList.remove('hidden');
    }
  }, [isHidden]);

  function nextImage() {
    let i = images.indexOf(currentImg) + 1;
    if (i == 4) i = 0;
    console.log('NExt ' + i);

    setCurrentImg(images[i]);
  }

  function prevImage() {
    let i = images.indexOf(currentImg) - 1;
    if (i <= -1) i = 3;

    console.log('Prev ' + i);
    setCurrentImg(images[i]);
  }

  function changeImg(src: string) {
    setCurrentImg(src);
  }

  return (
    <div
      id="galleryModal"
      className="flex flex-col justify-center content-center flex-wrap h-[750px] w-[620px] absolute"
    >
      <img
        src={currentImg}
        className="w-[550px] h-[550px] rounded-xl"
        draggable="false"
      />
      <div
        onClick={prevImage}
        className="select-none top-[275px] rounded-full bg-white h-[50px] w-[50px] absolute flex flex-col flex-wrap justify-center content-center left-[12px] cursor-pointer "
      >
        <img src="icon-previous.svg" draggable="false" />
      </div>
      <div
        onClick={nextImage}
        className="select-none top-[275px] rounded-full bg-white h-[50px] w-[50px] absolute flex flex-col flex-wrap justify-center content-center left-[560px] cursor-pointer"
      >
        <img src="icon-next.svg" draggable="false" />
      </div>

      <ul className="flex mx-auto justify-between w-[450px] mt-[30px]">
        {images.map((image) => {
          return (
            <li
              key={image}
              className="rounded-xl w-24 h-24 overflow-hidden hover:opacity-50 hover:bg-pale-orange"
              id={'modalImg' + images.indexOf(image)}
              onClick={() => {
                changeImg(image);
              }}
            >
              <img src={image} draggable="false" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Gallery;
