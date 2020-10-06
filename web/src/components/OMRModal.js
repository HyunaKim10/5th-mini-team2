import React from 'react';

const OMRModal = ({ isModalOpen, closeModal }) => {
  if (!isModalOpen) return null;
  return (
    <div className="omr-modal-overlay">
      <div className="omr-modal">
        <div className="form">
          <button className="btn" onClick={closeModal}>
            X
          </button>
        </div>
        <div className="title">수식입력창</div>
      </div>

      <style jsx>{`
        .omr-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.15);
        }
        .omr-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          width: 30%;
          height: 40%;
          transform: translate(-50%, -50%);
          background-color: white;
          border: solid 1px #707070;
        }
        .omr-modal .form {
          display: flex;
          justify-content: flex-end;
          height: 10%;
        }
        .omr-modal .form > button {
          background: none;
          outline: none;
          border: none;
        }
        .omr-modal .title {
          font-size: 20px;
          height: 10%;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #4893c4;
        }
      `}</style>
    </div>
  );
};

export default OMRModal;
