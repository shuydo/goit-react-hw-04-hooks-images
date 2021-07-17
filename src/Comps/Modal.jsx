import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Modal({ urlBigImg, onClose }) {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") onClose();
  };

  const handleClickOnBD = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.classList.toggle("no-scroll");
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.toggle("no-scroll");
    };
  });

  return (
    <div className="Overlay" onClick={handleClickOnBD}>
      <div className="Modal">
        <img src={urlBigImg} alt="oversize" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  urlBigImg: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}; // https://basiclightbox.electerious.com/
