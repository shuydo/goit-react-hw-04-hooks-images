import PropTypes from "prop-types";

import ImageGalleryItem from "./ImageGalleryItem";
export default function ImageGallery({ imgs, clickOnGall }) {
  return (
    <ul className="ImageGallery">
      {imgs.map(({ id, webformatURL }) => (
        <li key={id}>
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
      // largeImageURL: PropTypes.string,
      // tags: PropTypes.string,
    })
  ),
  clickOnGall: PropTypes.func.isRequired,
};
