// const {data}=await axios.get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.state.query}$&page=1&per_page=12&key=21031732-6fee4eefe658f550324b0a29e`)
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
const URL = "https://pixabay.com/api/?image_type=";
const KEY = "21031732-6fee4eefe658f550324b0a29e"; // pPage 200(20)
const constURL = `${URL}photo&orientation=horizontal&key=${KEY}&per_page=12&q=`;

const fKeys = (arr) => {
  return arr.map((el) => {
    return {
      id: el.id,
      webformatURL: el.webformatURL,
      largeImageURL: el.largeImageURL,
    };
  });
};

export default function fetchPix(query, pageN) {
  return fetch(`${constURL}${query}&page=${pageN}`)
    .then((r) => r.json())
    .then((r) => fKeys(r.hits));
}
