import React, { useContext } from 'react';
import { RoomsContext } from './context/RoomsContext';
import Header from './components/ui/Header/Header.js'
import RoomsList from './containers/Rooms/RoomsList'
import Footer from './components/ui/Footer/Footer'
import Modal from './containers/Modal/Modal'
import './App.css';

function App() {

  const { modalIsShow } = useContext(RoomsContext);


  return (
    
    <div className="App">
      <div className="container">
        <Header />
        <RoomsList />
        <Footer />
        <Modal isShow={modalIsShow} />     
      </div>
    </div>
  );
}

export default App;
