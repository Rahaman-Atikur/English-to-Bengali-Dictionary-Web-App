function scrollToSection(secId) {
  const section = document.getElementById(secId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function anotherScrollToSection(sectionId) {
  const vocaSection = document.getElementById(sectionId);
  if (vocaSection) {
    vocaSection.scrollIntoView({ behavior: "smooth" });
  }
}

function openSocialMedia() {
  window.open("https://www.github.com/Rahaman-Atikur", "_blank");
}
// Login Box Validation
function loginValidation() {
  const nameInput = document.getElementById("name-input-box").value;
  const passInput = document.getElementById("pass-input-box").value;
  if (nameInput === "") {
    alert("Please Write Your Name");
  }
  if (passInput != 1234) {
    alert("Password is not 1234");
  }
  if(nameInput!="" && passInput==1234 ){
    alert("Login Success");
  }
  
}
