import _ from "lodash";
import "./style.css";

const arr = [
  {
    name: "John",
    age: 20,
  },
  {
    name: "Binod",
    age: 25,
  },
  {
    name: "Ray",
    age: 30,
  },
  {
    name: "Joi",
    age: 18,
  },
];

const createCard = (cardItem) => {
  return `
    <div class="card">
        <h3>${cardItem?.name}</h3>
        <p>${cardItem?.age}</p>
    </div>`;
};

const generateCardList = (collection) => {
  const cardSection = document.querySelector(".card-section");

  _.forEach(collection, (item) => {
    const card = createCard(item);
    cardSection.insertAdjacentHTML("beforeend", card);
  });
};

generateCardList(arr);
