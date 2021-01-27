const cardContainer = document.querySelector("cardContainer");
let cards = [];
fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    card = data;
    appendData(cards);
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data) {
  var cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";

  for (var i = 0; i < data.length; i++) {
    var card = document.createElement("div");
    card.classname = "card";
    cardContainer.appendChild(card);

    var img = document.createElement("img");
    img.src = data[i].src;
    card.appendChild(img);

    var tagContainer = document.createElement("div");
    tagContainer.className = "tagContainer";
    card.appendChild(tagContainer);

    const tagButtons = data[i].tags.map((tag) => {
      const tagButton = document.createElement("button");
      tagButton.onclick = () => {
        const filterCards = cards.filterd((card) => {
          return (
            card.tags.find((tag) => {
              return tag.includes(tagButton.innerHTML);
            }) !== undefined
          );
        });
        appendData(filterCards);
      };
      tagButton.innerHTML = tag;
      return tagButton;
    });
    for (tagButtons of tagButtons) {
      tagButton.className = "tagbutton";
      tagContainer.appendChild(tagButton);
    }
  }
}

var card = document.createElement("div")
card.className = "card";

function filterTags() {
  var searchTerm = document.getElementById("searchInput").value;
  document.getElementById("searchResults").innerHTML = "you searched for:" + searchTerm;

  const searchTermLower = searchTerm.tolowercase();
  return (
    card.tag.find((tag) => {
      const tagLower = tag.toLowerCase();
      return tagLower.includes(searchTermLower);
    }) !== undefined
  );
};

//appendData(filtercards);


var newCardButton = document.getElementById("newCardButton");
console.log(newCardButton)
var newCardModal = document.getElementById("newCardModal");
newCardButton.onclick = function () {
  newCardModal.style.display = "block";
};

var closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function () {
  newCardModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == newCardModal) {
    newCardModal.style.display = "none";
  }
};

function saveNewCard() {
  var newImgSrc = document.getElementById("imgsrc").value;

  var newTags = document.getElementById("tags").value.split(";")

  var lastCardId = cards[cards.length - 1].id;

  var newCard = {
    id: lastCardId + 1,
    src: newImgSrc,
    tags: newTags,
  };

  cards = [...cards, newCard];
  appendData(cards);

  newCardModal.style.display = "none"
}