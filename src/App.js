import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Game from './components/Game';


const App = () => {
  return (
    <>
        <Header />     
        <main>
            <Game />
        </main>
        <Footer />
    </>
  );
}

export default App;