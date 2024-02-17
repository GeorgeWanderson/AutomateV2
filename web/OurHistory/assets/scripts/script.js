const addStoryBtn = document.getElementById("addStoryBtn");
const storyForm = document.getElementById("storyForm");
const editStoryForm = document.getElementById("editStoryForm");
const feed = document.getElementById("feed");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResult = document.getElementById("searchResult");
const readStoryModal = document.getElementById("readStoryModal");
const readStoryTitle = document.getElementById("readStoryTitle");
const readStoryContent = document.getElementById("readStoryContent");
const searchInputModal = document.getElementById("searchInputModal");
const searchBtnModal = document.getElementById("searchBtnModal");

let stories = [];

addStoryBtn.addEventListener("click", () => {
  document.getElementById("addStoryModal").style.display = "block";
});

storyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const age = parseInt(document.getElementById("age").value);
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  if (username.length > 10) {
    alert("Nome de usuário deve ter no máximo 10 caracteres.");
    return;
  }

  if (isNaN(age) || age < 18) {
    alert("Idade inválida. Você deve ter mais de 18 anos.");
    return;
  }

  if (!/^[a-zA-Z\s]+$/.test(title)) {
    alert("Título da história deve conter apenas letras.");
    return;
  }

  if (description.length > 300) {
    alert("Descrição deve ter no máximo 300 caracteres.");
    return;
  }

  const story = { username, age, title, description };
  stories.push(story);
  displayStories();
  document.getElementById("addStoryModal").style.display = "none";
  storyForm.reset();
});

function displayStories() {
  feed.innerHTML = "";
  stories.forEach((story, index) => {
    const storyDiv = document.createElement("div");
    storyDiv.classList.add("story");
    storyDiv.innerHTML = `
      <h3>${story.title}</h3>
      <p>${story.description}</p>
      <button class="editBtn" onclick="editStory(${index})">Editar</button>
      <button class="removeBtn" onclick="removeStory(${index})">Remover</button>
    `;
    feed.appendChild(storyDiv);
  });
}

function editStory(index) {
  const story = stories[index];
  document.getElementById("editDescription").value = story.description;
  document.getElementById("editStoryModal").style.display = "block";

  editStoryForm.onsubmit = function(e) {
    e.preventDefault();
    stories[index].description = document.getElementById("editDescription").value;
    displayStories();
    document.getElementById("editStoryModal").style.display = "none";
  }
}

function removeStory(index) {
  stories.splice(index, 1);
  displayStories();
}

searchBtn.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const foundStories = stories.filter(story => story.title.toLowerCase().includes(searchTerm));
  if (foundStories.length > 0) {
    displaySearchResults(foundStories);
    document.getElementById("searchModal").style.display = "block";
  } else {
    alert("Nenhuma história encontrada com o título especificado.");
  }
});

searchBtnModal.addEventListener("click", () => {
  const searchTerm = searchInputModal.value.toLowerCase();
  const foundStories = stories.filter(story => story.title.toLowerCase().includes(searchTerm));
  if (foundStories.length > 0) {
    displaySearchResults(foundStories);
  } else {
    alert("Nenhuma história encontrada com o título especificado.");
  }
});

function displaySearchResults(foundStories) {
  searchResult.innerHTML = "";
  foundStories.forEach(story => {
    const storyDiv = document.createElement("div");
    storyDiv.innerHTML = `
      <h3>${story.title}</h3>
      <p>${story.description}</p>
      <button class="readBtn" onclick="readStory('${story.title}', '${story.description}')">Ler História</button>
    `;
    searchResult.appendChild(storyDiv);
  });
}

function readStory(title, content) {
  readStoryTitle.textContent = title;
  readStoryContent.textContent = content;
  readStoryModal.style.display = "block";
}

const modals = document.querySelectorAll(".modal");

modals.forEach(modal => {
  const closeModal = modal.querySelector(".close");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
