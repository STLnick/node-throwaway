const postDeets = async (deets) => {
  const res = await fetch('http://localhost:5000/users/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(deets)
  })
}

const deleteUser = async (phoneNum) => {
  const res = await fetch('http://localhost:5000/users/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userPhone: phoneNum })
  })
}

document.querySelector(".add-form").addEventListener("submit", (e) => {
  e.preventDefault();

  postDeets(Array.from(event.target.elements)
    .filter(({ dataset }) => dataset.form)
    .reduce((submissionDeets, currentEl) => {
      submissionDeets[currentEl.id] = currentEl.value;
      return submissionDeets;
    }, {}));

});

document.querySelector('.delete-form').addEventListener('submit', (e) => {
  e.preventDefault()

  deleteUser(e.target.querySelector('input').value.trim())
})
