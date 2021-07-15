import PropTypes from "prop-types";

export default function ImageGalleryItem({ id, url, clickOnImg }) {
  return (
    <img
      className="galleryImg"
      id={id}
      src={url}
      alt="img"
      onClick={clickOnImg}
    ></img>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
