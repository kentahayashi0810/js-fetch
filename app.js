const fetchButton = document.getElementById("js-fetchButton");
const fetchInput = document.getElementById("js-fetchInput");
const fetchTitle = document.getElementById("js-fetchTitle");
const fetchPrice = document.getElementById("js-fetchPrice");

fetchButton.addEventListener("click", () => {
  const bookNum = parseInt(fetchInput.value);
  if (typeof bookNum == "number") {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.books[bookNum].title);
        fetchTitle.innerHTML = data.books[bookNum].title;
        fetchPrice.innerHTML = data.books[bookNum].price;
      })
      .catch(() => {
        console.log("We seemed to have failed to get the data.");
      });
  } else {
    alert("The input must be a number");
  }
});
