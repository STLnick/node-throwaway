const postDeets = async (deets) => {
  const res = await fetch('http://localhost:5000/users/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(deets)
  })
}

document.querySelector("form").addEventListener("submit", () => {
  event.preventDefault();

  // const test = Array.from(event.target.elements).map(el => {
  //   console.log(el.dataset.form)
  // })

  postDeets(Array.from(event.target.elements)
    .filter(({ dataset }) => dataset.form)
    .reduce((submissionDeets, currentEl) => {
      submissionDeets[currentEl.id] = currentEl.value;
      return submissionDeets;
    }, {}));

});
