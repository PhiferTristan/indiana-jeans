import { ownsJeans } from "./OwnsJeans.js";
import { locationTypeChoices } from "./UrbanDweller.js";

const container = document.querySelector("#container");

const render = async () => {
  const jeanOwnershipHTML = ownsJeans();
  const locationsHTML = await locationTypeChoices();

  container.innerHTML = `
        ${jeanOwnershipHTML}
        ${locationsHTML}
    `;
};

render();
