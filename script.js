let flashCardArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

const addBtn = document.querySelector("#show_card_box");
const delBtn = document.querySelector("#delete_cards");
const createCardBox = document.querySelector("#create_card");
const closeBtn = document.querySelector("#close_card_box");
const saveBtn = document.querySelector("#save_card");
const flashCardContainer = document.querySelector("#flashcards");

const question = document.querySelector("#question");
const answer = document.querySelector("#answer");

function addFlashCardBlock() {
  createCardBox.style.display = "block";
}

function closeCreateFlashCards() {
  createCardBox.style.display = "none";
}

function saveNewFlashCard(text, delThisIndex) {
  const newDiv = document.createElement("div");
  const newh21 = document.createElement("h2");
  const newh22 = document.createElement("h2");
  const newI = document.createElement("i");

  newDiv.setAttribute("class", "flashcard");
  newh21.setAttribute(
    "style",
    "font-size:20px;border-top:1px solid aqua; padding:15px; margin-top:30px;"
  );
  newh22.setAttribute(
    "style",
    "font-size:20px;border-top:1px solid aqua; padding:15px; margin-top:30px;"
  );

  newI.setAttribute("class", "fa-minus fas");
  newI.addEventListener("click", () => {
    flashCardArray.splice(delThisIndex, 1);

    localStorage.setItem("items", JSON.stringify(flashCardArray));
    window.location.reload();
  });

  newDiv.appendChild(newh21);
  newDiv.appendChild(newh22);
  newDiv.appendChild(newI);

  newh21.innerHTML = `Question : ${text.my_question}`;
  newh22.innerHTML = `Answer : ${text.my_answer}`;
  flashCardContainer.appendChild(newDiv);
}

saveBtn.addEventListener("click", addFlashcard);
addBtn.addEventListener("click", addFlashCardBlock);
closeBtn.addEventListener("click", closeCreateFlashCards);

delBtn.addEventListener("click", () => {
  localStorage.clear();
  flashCardContainer.innerHTML = "";
  contentArray = [];
});

flashCardArray.forEach(saveNewFlashCard);

function addFlashcard() {
  const question = document.querySelector("#question");
  const answer = document.querySelector("#answer");

  let flashcard_info = {
    my_question: question.value,
    my_answer: answer.value,
  };

  flashCardArray.push(flashcard_info);
  console.log(flashCardArray);
  localStorage.setItem("items", JSON.stringify(flashCardArray));

  saveNewFlashCard(
    flashCardArray[flashCardArray.length - 1],
    flashCardArray.length - 1
  );

  question.value = "";
  answer.value = "";
}
