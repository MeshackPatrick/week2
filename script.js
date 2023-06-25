document.addEventListener("DOMContentLoaded", () => {
  const animalListContainer = document.getElementById(`animal-list`);
  const animalDetailsContainer = document.getElementById(`animal-details`);
  //fetch list of animals from server
  fetch(`http://localhost:3000/characters`)
    .then((response) => response.json())
    .then((data) => renderAnimalList(data))
    .catch((error) => console.log(error));
  //Render animal list
  function renderAnimalList(animals) {
    const animalList = document.createElement(`ul`);
    animals.forEach((animal) => {
      const animalItem = document.createElement(`li`);
      animalItem.textContent = animal.name;
      animalItem.addEventListener(`click`, () => {
        renderAnimalDetails(animal);
      });
      animalList.appendChild(animalItem);
    });
    animalListContainer.appendChild(animalList);
  }
  //Render animal details
  function renderAnimalDetails(animal) {
    animalDetailsContainer.innerHTML = `<h2>${animal.name}</h2>
        <img src="${animal.image}"alt="${animal.name}"/>
        <p>Votes:${animal.votes}</p>
        <button id="vote-btn">Vote</button>
`;
  }
});
