import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({ imgs, clickOnGall }) {
  // console.log(clickOnGall);
  return (
    <ul className="ImageGallery">
      {imgs.map(({ id, webformatURL }, idx) => (
        <li key={idx}>
          <ImageGalleryItem
            id={id}
            url={webformatURL}
            clickOnImg={clickOnGall}
          />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageUrl: PropTypes.string,
    })
  ),
  clickOnGall: PropTypes.func.isRequired,
};
