function displayStory(response) {
  console.log("story generated");

  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateStory(event) {
  event.preventDefault();

  let textInputElement = document.querySelector("#text-input");
  let apiKey = "3ac30o3a6617501a8ba14f0ect4c9d11";
  let context =
    "You are a romantic Story expert and love to write short stories. Your mission is to generate a one paragraph story. Please make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a short story about ${textInputElement.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let storyElement = document.querySelector("#story");
  storyElement.classList.remove("hidden");
  storyElement.innerHTML = `<div class="generating">⏳Generating a short story about ${textInputElement.value}</div>`;

  console.log("Generating story");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayStory);
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
