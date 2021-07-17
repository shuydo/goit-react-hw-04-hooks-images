import React, { useEffect, useState } from "react"; // import axios from "axios";
import Loader from "react-loader-spinner"; // import { ToastContainer } from "react-toastify";

import fetchPix from "./js/Api";
import Searchbar from "./Comps/Searchbar"; // import "react-toastify/dist/ReactToastify.css";
import ImageGallery from "./Comps/ImageGallery";
import Modal from "./Comps/Modal";
import Button from "./Comps/Button";

export default function App() {
  const [query, setQuery] = useState(null);
  const [curPage, setCurPage] = useState(1);
  const [imgs, setImgs] = useState([]);
  const [modalImgId, setModalImgId] = useState(null);
  const [showM, setShowM] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleModal = () => setShowM(!showM);
  const handleMore = () => setCurPage((oldS) => oldS + 1);

  const toSearch = (id) => {
    return imgs[imgs.map((el) => el.id).indexOf(id)].largeImageURL;
  }; // return url big img by id (take from DOM by click on gall)

  const handleTakeID = (e) => {
    setModalImgId(+e.target.id);
    toggleModal();
  };

  const handleSubmit = (query) => {
    setQuery(query);
    setCurPage(1);
    setImgs([]);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);
    fetchPix(query, curPage).then((r) => setImgs((oldS) => [...oldS, ...r]));
    setIsLoading(false);
  }, [query, curPage]);

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  }); // const notify = () => toast("Wow so easy!");

  return (
    <div className="App">
      {isLoading && <Loader className="Loader" type="Watch" />}
      {/* <button onClick={notify}>Notify!</button>  */}
      <Searchbar onSubmitDo={handleSubmit} />
      {!isLoading && imgs.length > 0 && (
        <>
          <ImageGallery imgs={imgs} clickOnGall={handleTakeID} />
          <Button onClick={handleMore} />
        </>
      )}
      {showM && (
        <Modal urlBigImg={toSearch(modalImgId)} onClose={toggleModal} />
      )}{" "}
      {/* <ToastContainer /> */}
    </div>
  );
}
