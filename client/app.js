const form = document.getElementById("messageform");

console.log(form);

function handleSubmit(event) {
  event.preventDefault();

  const username = event.target.username.value;
  const message = event.target.message.value;

  //console.log("Form submitted!");
  //console.log({ username: username, message: message });
}

form.addEventListener("submit", handleSubmit);
