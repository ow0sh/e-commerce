import { useEffect, useState } from 'react';

interface Props {
  setCount: (params: any) => any;
}

export default function Main({ setCount }: Props) {
  const [activeImg, setActiveImg] = useState<string>('image-product-1.jpg');
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const img1 = document.getElementById('thumbnail-1');
    const img2 = document.getElementById('thumbnail-2');
    const img3 = document.getElementById('thumbnail-3');
    const img4 = document.getElementById('thumbnail-4');

    const activeClass: string[] = ['border-[2px]', 'border-orange'];

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

    if (activeImg === 'image-product-1.jpg') {
      reset();
      img1?.classList.add(...activeClass);
      img1?.children[0].classList.add('opacity-25');
    }
    if (activeImg === 'image-product-2.jpg') {
      reset();
      img2?.classList.add(...activeClass);
      img2?.children[0].classList.add('opacity-25');
    }
    if (activeImg === 'image-product-3.jpg') {
      reset();
      img3?.classList.add(...activeClass);
      img3?.children[0].classList.add('opacity-25');
    }
    if (activeImg === 'image-product-4.jpg') {
      reset();
      img4?.classList.add(...activeClass);
      img4?.children[0].classList.add('opacity-25');
    }
  }, [activeImg]);

  function handlerClick(src: string): void {
    setActiveImg(src);
  }

  function addToCart() {
    if (counter === 0) return;
    setCount(counter);
  }

  return (
    <main className="flex justify-between p-[100px]">
      <section className="pr-[50px]">
        <img
          src={activeImg}
          className="w-[450px] h-[450px] rounded-xl cursor-pointer"
          id="mainImage"
          draggable="false"
        />
        <ul className="flex justify-between mt-9">
          <li
            className="border-[2px] border-orange rounded-xl w-24 h-24 overflow-hidden hover:opacity-50"
            id="thumbnail-1"
            onClick={() => {
              handlerClick('image-product-1.jpg');
            }}
          >
            <img
              src="image-product-1-thumbnail.jpg"
              className="opacity-25"
              draggable="false"
            />
          </li>
          <li
            className="rounded-xl w-24 h-24 overflow-hidden hover:opacity-50"
            id="thumbnail-2"
            onClick={() => {
              handlerClick('image-product-2.jpg');
            }}
          >
            <img src="image-product-2-thumbnail.jpg" draggable="false" />
          </li>
          <li
            className="rounded-xl w-24 h-24 overflow-hidden hover:opacity-50"
            id="thumbnail-3"
            onClick={() => {
              handlerClick('image-product-3.jpg');
            }}
          >
            <img src="image-product-3-thumbnail.jpg" draggable="false" />
          </li>
          <li
            className="rounded-xl w-24 h-24 overflow-hidden hover:opacity-50"
            id="thumbnail-4"
            onClick={() => {
              handlerClick('image-product-4.jpg');
            }}
          >
            <img src="image-product-4-thumbnail.jpg" draggable="false" />
          </li>
        </ul>
      </section>
      <section className="pl-[50px] max-w-[600px]">
        <h2 className="text-orange font-default tracking-wide mt-[50px]">
          SNEAKER COMPANY
        </h2>
        <h1 className="text-6xl font-default font-bold py-[30px]">
          Fall Limited Edition Sneakers
        </h1>
        <p className="max-w-[450px] text-gray-500 font-default">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&apos;ll withstand
          everything the weather can offer.
        </p>
        <div className="py-[30px] font-default">
          <div className="flex text-3xl font-bold">
            $125.00{' '}
            <div className="ml-[30px] my-auto text-lg bg-pale-orange w-14 text-orange rounded-lg text-center">
              50%
            </div>
          </div>
          <footer className="line-through text-gray-400 font-bold">
            $250.00
          </footer>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center bg-light-grayish w-[160px] h-[60px] rounded-lg">
            <div className="flex justify-around w-full">
              <button
                className="text-orange text-3xl font-bold hover:opacity-50"
                onClick={() => {
                  if (counter === 0) return;
                  setCounter((counter) => counter - 1);
                }}
              >
                -
              </button>
              <p className="font-default font-bold flex flex-col justify-center">
                {counter}
              </p>
              <button
                className="text-orange text-3xl font-bold hover:opacity-50"
                onClick={() => setCounter((counter) => counter + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={addToCart}
            className="flex justify-center py-[18px] ml-[20px] bg-orange hover:opacity-75 w-[300px] h-[60px] rounded-lg text-white font-default font-bold"
          >
            <img
              src="icon-cart.svg"
              className="w-[20px] h-[20px] mr-[10px] cursor-pointer"
              alt=""
            />
            Add to cart
          </button>
        </div>
      </section>
    </main>
  );
}
