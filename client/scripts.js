const addUser = async (newUser) => {
  const res = await fetch('http://localhost:5000/users/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
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

  addUser(Array.from(event.target.elements)
    .filter(({ dataset }) => dataset.form)
    .reduce((userInfo, input) => {
      userInfo[input.id] = input.value;
      return userInfo;
    }, {}))
})

document.querySelector('.delete-form').addEventListener('submit', (e) => {
  e.preventDefault()

  deleteUser(e.target.querySelector('input').value.trim())
})
