import React, { useState } from 'react';
import Modal from '../components/Modal/Modal';
import Number1 from '../assets/Number1.png';
import Number2 from '../assets/Number2.png';
import Number3 from '../assets/Number3.png';
import htmllogo from '../assets/htmllogo.png';

function DashBoard({onClose}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className='modal-heading'>
        <h2>Update Scores</h2>
        <img src={htmllogo} class="logoo" alt="logo" />
        </div>
        
        <hr className="horizontal" />
        <ul>
          <div className="points">
            <div className="content">
              <div>
              <img src={Number1} alt="Number" />
              Update your <span className="boldText">rank</span>
              </div>
              <input type="text" />
            </div>
          </div>
          
          <div className="points">
          <div className="content">
            <div>
            <img src={Number2} alt="Number" />
              Update your <span className="boldText">percentile</span>
            </div>
            <input type="text" />
          </div>
            
          </div>

          <div className="points">
          <div className="content">
          <div>
          <img src={Number3} alt="Number" />
            Update your <span className="boldText">current score (out of 15)</span>
          </div>
          
            <input type="text" />
          </div>
          </div>
        </ul>
        <button onClick={onClose}>Cancel</button>
      </Modal>
    </>
  );
}

export default DashBoard;