const text = document.querySelector(".sec-text");

const textLoad = () => {
      text.classList.remove("fullstack")
      setTimeout(() => {
            text.textContent = "Front-end";
      }, 0);
      setTimeout(() => {
            text.textContent = "Back-end";
      }, 4000);
      setTimeout(() => {
            text.textContent = "Fullstack";
            text.classList.add("fullstack");
      }, 8000);
      /* setTimeout(() => {
             text.textContent = "De Games";
       }, 8000);*/
}

textLoad();
setInterval(textLoad, 12000);