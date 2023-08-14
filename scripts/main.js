import { ownsJeans } from "./OwnsJeans.js";

const container = document.querySelector("#container");

const render = () => {
  const jeanOwnershipHTML = ownsJeans();

  container.innerHTML = jeanOwnershipHTML;
};

render();
