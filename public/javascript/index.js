
const charactersAPI = new APIHandler('http://localhost:8050');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.getFullList()
    .then(response => {
      // Display the data in the page
      const characters = response.data
      charactersContainer.innerHTML = ""

      characters.forEach(character =>
        charactersContainer.appendChild(generateCharacterDOM(character)))
    })
    .catch(error => {
      console.log(error);
    });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    const id = document.getElementById("character-id").value;
    charactersAPI.getOneRegister(id)
      .then(response => {
        // Display the data in the page
      })
      .catch(error => {
        console.log(error);
      });
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    const id = document.getElementById('character-id-delete').value;
    charactersAPI.deleteOneRegister(id)
      .then(response => {
        // Change button background color to green
        document.getElementById('delete-one').style.backgroundColor = 'green';
      })
      .catch(error => {
        // Change button background color to red
        document.getElementById('delete-one').style.backgroundColor = 'red';
        console.log(error);
      });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementById('edit-id').value;
    const name = document.getElementById('edit-name').value;
    const occupation = document.getElementById('edit-occupation').value;
    const weapon = document.getElementById('edit-weapon').value;
    const cartoon = document.getElementById('edit-cartoon').checked;

    charactersAPI.updateOneRegister(id, {name, occupation, weapon, cartoon})
      .then(response => {
        // Change button background color to green
        document.getElementById('edit-submit').style.backgroundColor = 'green';
      })
      .catch(error => {
        // Change button background color to red
        document.getElementById('edit-submit').style.backgroundColor = 'red';
        console.log(error);
      });
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('new-name').value;
    const occupation = document.getElementById('new-occupation').value;
    const weapon = document.getElementById('new-weapon').value;
    const cartoon = document.getElementById('new-cartoon').checked;

    charactersAPI.createOneRegister({name, occupation, weapon, cartoon})
      .then(response => {
        // Change button background color to green
        document.getElementById('new-submit').style.backgroundColor = 'green';
      })
      .catch(error => {
        // Change button background color to red
        document.getElementById('new-submit').style.backgroundColor = 'red';
        console.log(error);
      });
  });
});





