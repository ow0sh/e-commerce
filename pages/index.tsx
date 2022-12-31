import { useState, useEffect } from 'react';

import Header from '../components/header';
import Main from '../components/main';
import Gallery from '../components/gallery';

export default function Home() {
  const [cartPurchases, setCartPurchases] = useState<number>(0);
  const [isGalleryHidden, setIsGalleryHidden] = useState<boolean>(true);

  useEffect(() => {
    document.documentElement.addEventListener('click', (e) => {
      cartModal(e);
      galleryModal(e);
    });
  }, []);

  function cartModal(e: MouseEvent) {
    const cartModal = document.getElementById('cartModal');
    const cart = document.getElementById('cart');

    // @ts-ignore
    if (cartModal?.contains(e.target) || cart?.contains(e.target)) {
      cartModal?.classList.remove('hidden');
    } else {
      cartModal?.classList.add('hidden');
    }
  }

  function galleryModal(e: MouseEvent) {
    const galleryModal = document.getElementById('galleryModal');
    const mainImage = document.getElementById('mainImage');
    const dark = document.getElementById('dark');

    // @ts-ignore
    if (galleryModal?.contains(e.target) || mainImage?.contains(e.target)) {
      galleryModal?.classList.remove('hidden');
      dark?.classList.remove('hidden');
    } else {
      galleryModal?.classList.add('hidden');
      dark?.classList.add('hidden');
    }
  }

  function reset() {
    setCartPurchases(0);
  }

  return (
    <div className="min-[1440px]:mx-[200px] mx-[30px]">
      <div className="flex justify-center z-20 relative">
        <Gallery isHidden={isGalleryHidden} />
      </div>
      <div
        id="dark"
        className="fixed w-full h-full hidden bg-black opacity-50 left-0"
      ></div>
      <Header cartPurchases={cartPurchases} reset={reset} />
      <Main setCount={setCartPurchases} />
    </div>
  );
}
