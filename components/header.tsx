import { useEffect, useRef, useState } from 'react';

interface Props {
  cartPurchases: number;
  reset: (params: any) => any;
}

const Header = ({ cartPurchases, reset }: Props) => {
  const cartModal = useRef<HTMLDivElement>(null);

  function handlerClick() {
    if (cartModal.current?.classList.contains('hidden')) {
      cartModal.current?.classList.remove('hidden');
    } else {
      cartModal.current?.classList.add('hidden');
    }
  }

  return (
    <header className="flex justify-between h-[120px] border-b-[1px]">
      <section className="flex">
        <h1 className="font-bold text-5xl font-default my-auto mr-[50px]">
          sneakers
        </h1>
        <nav className={'flex font-default h-full text-gray-500'}>
          <a
            className={'header_link hover:border-b-4 hover:border-orange'}
            href="#"
          >
            Collections
          </a>
          <a
            className={'header_link hover:border-b-4 hover:border-orange'}
            href="#"
          >
            Men
          </a>
          <a
            className={'header_link hover:border-b-4 hover:border-orange'}
            href="#"
          >
            Woman
          </a>
          <a
            className={'header_link hover:border-b-4 hover:border-orange'}
            href="#"
          >
            About
          </a>
          <a
            className={'header_link hover:border-b-4 hover:border-orange'}
            href="#"
          >
            Contact
          </a>
        </nav>
      </section>
      <section className="flex flex-col justify-center h-full">
        <div className="flex">
          {cartPurchases !== 0 && (
            <div className="fixed ml-4 mt-2 w-[25px] h-[15px] rounded-xl bg-orange text-white text-center font-black text-xs">
              {cartPurchases}
            </div>
          )}
          <img
            id="cart"
            onClick={handlerClick}
            src="icon-cart.svg"
            className="w-[32px] h-[30px] my-auto mr-[30px] cursor-pointer"
            alt=""
          />
          <div
            id="cartModal"
            ref={cartModal}
            className="hidden w-[350px] h-[250px] absolute shadow-2xl right-[200px] bg-white top-[100px]"
          >
            <header className="flex flex-col justify-center pl-[20px] font-black h-[70px] border-b-[1px]">
              Cart
            </header>
            {cartPurchases === 0 ? (
              <div className="flex flex-col justify-center content-center flex-wrap h-[180px] text-gray-500 font-default font-bold">
                Your cart is empty.
              </div>
            ) : (
              <div className="flex flex-col justify-between h-[180px] p-[30px]">
                <div className="flex">
                  <img
                    src="image-product-1-thumbnail.jpg"
                    className="w-[50px] h-[50px] rounded"
                  />
                  <div className="font-default ml-[10px]">
                    <img
                      src="icon-delete.svg"
                      alt=""
                      className="fixed ml-[230px] mt-[15px]"
                      onClick={reset}
                    />
                    <h3 className="text-gray-500">
                      Fall Limited Edition Sneakers
                    </h3>
                    <h3 className="text-gray-500">
                      $125.00 x {cartPurchases}{' '}
                      <b className="text-black ml-2">
                        ${cartPurchases * 125}.00
                      </b>
                    </h3>
                  </div>
                </div>
                <button className="text-white bg-orange h-[50px] rounded-lg hover:opacity-50">
                  Checkout
                </button>
              </div>
            )}
          </div>
          <img
            src="image-avatar.png"
            className="hover:border-2 hover:border-orange rounded-full w-[50px] h-[50px] cursor-pointer"
            alt=""
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
