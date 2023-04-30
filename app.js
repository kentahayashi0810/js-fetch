const fetchButton = document.getElementById("js-fetchButton");

fetchButton.addEventListener("click", () => {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => console.log(data.books[1].title));
});
