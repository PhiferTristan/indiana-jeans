import { OwnJeansChoices } from "./OwnsJeans.js";
import { SaveSubmission } from "./SaveSubmissions.js";
import { SubmissionList } from "./Submissions.js";
import { LocationTypeChoices } from "./UrbanDweller.js";

const container = document.querySelector("#container");

const render = async () => {
  const jeanOwnershipHTML = OwnJeansChoices();
  const locationsHTML = await LocationTypeChoices();
  const saveButtonHTML = await SaveSubmission();
  const submissionListHTML = await SubmissionList();

  container.innerHTML = `
        ${jeanOwnershipHTML}
        ${locationsHTML}
        ${saveButtonHTML}
        ${submissionListHTML}
    `;
};

document.addEventListener("newSubmissionCreated", render);

render();
