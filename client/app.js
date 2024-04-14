const form = document.getElementById("messageform");

console.log(form);

function handleSubmit(event) {
  event.preventDefault();

  const username = event.target.username.value;
  const message = event.target.message.value;

  console.log("Form submitted!");
  console.log({ username: username, message: message });
}

// make server request with form data as the body

fetch("http://localhost:8080/message", {
  method: "POST",
  body: JSON.stringify({ username: "username", message: "message" }),
  headers: {
    "Content-Type": "application/json",
  },
});

form.addEventListener("submit", handleSubmit);
