import React from 'react';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-center mb-4">Thank you for subscribing!</h2>
        <p className="text-center mb-4">You have successfully signed up for the newsletter.</p>
        <button
          onClick={closeModal}
          className="w-full py-2 bg-primary-color-dark text-white rounded-md hover:bg-opacity-80"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
