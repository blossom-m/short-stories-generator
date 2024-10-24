function generateStory(event) {
  event.preventDefault();

  new Typewriter("#story", {
    strings: "It was a glorious, colorful autumn.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
