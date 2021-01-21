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
  .ctach(function(err) {
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
    tagButton.innerHTML = tag;
    return tagButton;
  });
  for (tagButtons of tagButtons) {
    tagButton.className = "tagbutton";
    tagContainer.appendChild(tagButton);
    }
  }
}