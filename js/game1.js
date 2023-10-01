var numCards = 16;

function createCards() {
    console.log("creating " + numCards + " cards");
    let numCol = Math.ceil(Math.sqrt(numCards));
    let numRow = Math.ceil(numCards/numCol);
    console.log("numCol: " + numCol + "numRow: " + numRow);
    console.log("game width: " + document.getElementById('memory-game').clientWidth);
    let cardHeightNum = Math.ceil((document.getElementById('memory-game').clientHeight*0.9)/numRow);
    let cardWidthNum = Math.ceil((cardHeightNum*5)/7);
    let cardWidth = cardWidthNum.toString();
    console.log("card width: " + cardWidth);
    let cardHeight = cardHeightNum.toString();
    htmlStr = '';
    for(let i = 0; i<numCards; i++) {
        htmlStr += "<div id='card" + i + "' class='item-card' style='width: " + cardWidth + "px; height: " + cardHeight + "px;'><img class='front-face' src='img/herc.svg'><img class='back-face' src='img/herc.svg'></div>";
    }
    document.getElementById('memory-game').innerHTML = htmlStr;
    for(let j = 0; j<numCards; j++) {
        document.getElementById("card"+j).addEventListener('click', flipCard);
    }
}

function addTwoCards() {
    numCards+=2;
    createCards();
}

function subtractTwoCards() {
    numCards-=2;
    createCards();
}

function showAddSubtractButton() {
    document.getElementById('add-button').style.display = "block";
    document.getElementById('subtract-button').style.display = "block";
}

function hideStartButton() {
    document.getElementById('start-button').style.display = "none";
    console.log("start button hidden");
}

function startGame() {
    console.log("game started");
    hideStartButton();
    showAddSubtractButton();
    createCards();
}

function flipCard() {
    console.log("do a flip");
    this.classList.toggle('flip');
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Ready");
});
