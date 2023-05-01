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
        fetchPrice.innerHTML = data.books[bookNum].price + "円";
      })
      .catch(() => {
        console.log("We seem to have failed to get the data.");
      });
  } else {
    alert("The input must be a number");
  }
});

const fetchButton2 = document.getElementById("js-fetchButton2");
const fetchInput2 = document.getElementById("js-fetchInput2");
const fetchTitle2 = document.getElementById("js-fetchTitle2");
const fetchPrice2 = document.getElementById("js-fetchPrice2");

fetchButton2.addEventListener("click", () => {
  const bookPublisher = fetchInput2.value;

  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data["books"]);
      const books = data["books"];
      for (const item of books) {
        if (item["publisher"] == bookPublisher) {
          fetchTitle2.innerHTML = item.title;
          fetchPrice2.innerHTML = item.price + "円";
        }
      }
    })
    .catch(() => {
      console.log("We seem to have failed to get the data.");
    });
});
