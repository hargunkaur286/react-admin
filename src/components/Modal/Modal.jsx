import './Modal.css';

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          {children}
          <button className="close-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    );
}  

export default Modal
