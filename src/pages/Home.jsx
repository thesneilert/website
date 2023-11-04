import React from 'react';

import Header from '../components/Header';
import PageIllustration from '../components/PageIllustration';
import HeroHome from '../components/HeroHome';
import FeaturesZigZag from '../components/FeaturesZigzag';
// import Banner from '../components/Banner';
import Footer from '../components/Footer';
import PokemonGame from '../components/PokemonGame/PokemonGame';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="grow">
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <HeroHome />
        {/* <FeaturesZigZag /> */}
      </main>

      {/* <Banner /> */} 

      <Footer />
      <PokemonGame />
    </div>
  );
}

export default Home;