import requestLolApi from './requestLolApi';
import './style.css';

const container = document.querySelector('.container-cards');
const endpoint = 'http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json';
const urlImgBase = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/';

const createCard = (name, img, describe) => {
  const section = document.createElement('div');
  section.classList.add('card');

  const nameEl = document.createElement('h3');
  nameEl.classList.add('name');
  nameEl.innerHTML = name;
  section.appendChild(nameEl);

  const imgEl = document.createElement('img');
  imgEl.classList.add('img');
  imgEl.src = img;
  imgEl.alt = name;
  section.appendChild(imgEl);

  const pEl = document.createElement('p');
  pEl.classList.add('describe');
  pEl.innerHTML = describe;
  section.appendChild(pEl);

  container.appendChild(section);
};

const renderAllCards = async () => {
  const char = await requestLolApi(endpoint);

  if (char) {
    const { data } = char;
    const charList = Object.entries(data);

    charList.forEach(([name, { image, title }]) => {
      const nameImg = `${image.full.split('.')[0]}_0.jpg`;
      const urlImg = `${urlImgBase}${nameImg}`;
      createCard(name, urlImg, title);
    });
  }
};

window.onload = () => {
  renderAllCards();
};
