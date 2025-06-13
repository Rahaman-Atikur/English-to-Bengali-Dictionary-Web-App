// API Data Loading Functions
function loadEachLesson() {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayLoadedEachLesson(data.data));
}
function loadWordsFromLesson(id) {
  console.log(id);
  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then((response) => response.json())
    .then((data) => displayWordFromEachLesson(data.data));
}
function loadWordDetails(id) {
  fetch(`https://openapi.programming-hero.com/api/word/${id}`)
    .then((res) => res.json())
    .then((data) => displayDetailWord(data.data));
}
// Display Data Functions
const displayLoadedEachLesson = (lessonsName) => {
  console.log(lessonsName);
  let buttonContainer = document.getElementById("lesson-btn");

  for (let lessonName of lessonsName) {
    let buttonDiv = document.createElement("div");
    buttonDiv.innerHTML = `
      <button onclick="loadWordsFromLesson(${lessonName.level_no})" class="btn btn-outline btn-secondary  hover:bg-violet-500"> <img class="w-5 h-5" src="https://img.icons8.com/?size=60&id=100240&format=png" alt="">Lesson-${lessonName.level_no}</button>
     `;
    buttonContainer.appendChild(buttonDiv);
  }
};
const displayWordFromEachLesson = (words) => {
  console.log(words);
  let wordModal = document.getElementById("word-show");
  wordModal.innerHTML = "";
  for (let word of words) {
    console.log(word);
    let wordDiv = document.createElement("div");
    wordDiv.innerHTML = `
        <div class="card bg-gray-200 mb-5 text-black-content w-96">
        <div class="card-body items-center text-center">
    <h2 class="card-title">${word.word}</h2>
    <p>${word.meaning}</p>
    <p>${word.pronunciation}</p>
    <div class="flex gap-20">
    <img onclick="loadWordDetails(${word.id})" class="w-8 h-8" src="https://img.icons8.com/?size=60&id=59817&format=png">
      <img class="w-8 h-8" src="https://img.icons8.com/?size=48&id=4309&format=png">
      </div>
  </div>
</div>
        `;
    wordModal.appendChild(wordDiv);
  }
};
const displayDetailWord = (wordsDetail) => {
  document.getElementById("word_modal").showModal();
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML=`
  <h2 class="text-2xl font-bold">${wordsDetail.word}</h2>
  <p class="text-xl">${wordsDetail.meaning}</p>
  <p>Example</p></br>
  <p>${wordsDetail.sentence}</p>
  <p>Synonyms</p>
  <p>${wordsDetail.synonyms[0]}</p>
  <p>${wordsDetail.synonyms[1]}</p>
  <p>${wordsDetail.synonyms[2]}</p>
  `;
};
loadEachLesson();

// {
//     "word": "Abundant",
//     "meaning": null,
//     "pronunciation": "অবানডান্ট",
//     "level": 3,
//     "sentence": "Water is abundant in rainy seasons.",
//     "points": 3,
//     "synonyms": [],
//     "id": 1
// }
