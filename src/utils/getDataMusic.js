const GENRE = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre';
const LOCAL_GENRE = '../src/data/genre.json';
const LOCAL_RADIO = '../src/data/radio.json';
const RADIO = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio';

const getResource = async (url) => {//async исп-ся, если в коде есть асинхронщина
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Error code ${res.status}`);
  }
  return res.json();
}

const getSomeRadio = async () => {
  const res = await getResource(RADIO);
  return res.data.map(_transformRadio).slice(0, 5)
}
 
const getAllRadio = async () => {
  const res = await getResource(RADIO);
  return res.data.map(_transformRadio)
}

const getAllGenre = async () => {
  const res = await getResource(GENRE);
  return res.data.map(_transformGenre).slice(0, 9)
}
 
const _transformRadio = (item) => {
  return  {
    id: item.id,
    title: item.title,
    picture: item.picture,
    pictureBig: item.picture_big
  }
}

  const _transformGenre = (item) => {
  return  {
    id: item.id,
    name: item.name,
    picture: item.picture,
    pictureBig: item.picture_big
  }
}
 
export {getAllRadio, getSomeRadio, getAllGenre};