import PropTypes from "prop-types";

export default function Searchbar({ onSubmitDo }) {
  return (
    <>
      <header className="Searchbar">
        <form
          className="SearchForm"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitDo(e.target.elements[1].value); //  как взять нужный ДОМ эл-т по тегу, а не поряд.номеру?
            e.target.elements[1].value = "";
          }}
        >
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
}

Searchbar.propTypes = {
  onSubmitDo: PropTypes.func.isRequired,
};
