import React from "react";
// we passed currentPhoto as props to Modal
function Modal({ currentPhoto }) {
  // destructure currentPhoto
  const { name, category, description, index } = currentPhoto;
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`)}
          alt="current category"
        />
        <p>{description}</p>
        <button>Close this modal</button>
      </div>
    </div>
  );
}

export default Modal;
