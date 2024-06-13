import * as React from 'react';
import Button from './components/controls/Button/Button';
import './style.scss';
import { useState } from 'react';
import Modal from './components/controls/Modal/Modal';
import QRScanner from './components/controls/QRScanner/QRScanner';

export default function App() {
  const [isOpen, setOpen] = useState(false);

  const openHello = (event) => {
    setOpen(!isOpen);
    console.log(isOpen);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const qrScanner = isOpen ? <QRScanner /> : null;

  return (
    <div className="appContainer">
      <div className="main">
        <Button text="Scan QR Code" onClick={openHello} />
      </div>
      <Modal isOpen={isOpen} title="Scan QR Code" closeModal={closeModal}>
        <div>{qrScanner}</div>
      </Modal>
    </div>
  );
}
