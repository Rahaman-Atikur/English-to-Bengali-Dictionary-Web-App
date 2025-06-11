function loadEachLesson(){
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res)=>res.json())
    .then((data)=>displayLoadedEachLesson(data.data));
}
const displayLoadedEachLesson=(lessonsName)=>{
    // console.log(lessonsName);
   let buttonContainer= document.getElementById("lesson-btn");

    for(let lessonName of lessonsName ){
       let buttonDiv =  document.createElement("div");
       buttonDiv.innerHTML=`
        <button class="btn btn-outline btn-secondary  hover:bg-violet-500"> <img class="w-5 h-5" src="https://img.icons8.com/?size=60&id=100240&format=png" alt="">Lesson-${lessonName.level_no}</button>
       `
       buttonContainer.appendChild(buttonDiv);

    }
}
loadEachLesson();
// {
//     "id": 101,
//     "level_no": 1,
//     "lessonName": "Basic Vocabulary"
// }
