export const SubmissionList = async () => {
  // Get the submissions from your API
  const response = await fetch("http://localhost:8088/submissions");
  const submissions = await response.json();

  // Iterate the submissions and create some <section> representations
  let submissionHTML = "";
  const submissionStringArray = submissions.map((submission) => {
    return `<section class="submission">
      <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
      <div></div>Area type foreign key? ${submission.socioLocationId}
      </section>`;
  });
  submissionHTML += submissionStringArray.join("");

  return submissionHTML;
};

// for (const submission of submissions) {
//   submissionHTML += `<section class="submission">
//                       <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
//                       <div></div>Area type foreign key? ${submission.socioLocationId}
//                       </section>`;
// }
// return submissionHTML;
// Return the HTML string
// };
