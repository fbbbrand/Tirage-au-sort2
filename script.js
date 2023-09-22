var availableNumbers = [];
var winnerPosition; // Variable pour stocker la position de la case gagnante

function createTirage() {
  var participantCount = document.getElementById("participant").value;
  var tirageContainer =
    document.getElementsByClassName("box-container")[0];
  tirageContainer.innerHTML = "";
  document.getElementById("winnerText").textContent = "";

  availableNumbers = [];

  for (var i = 1; i <= participantCount; i++) {
    availableNumbers.push(i);
  }

  var boxesPerRow = 5;
  var rows = Math.ceil(participantCount / boxesPerRow);

  for (var j = 0; j < rows; j++) {
    var row = document.createElement("div");
    row.className = "box-row";
    tirageContainer.appendChild(row);

    var startIndex = j * boxesPerRow;
    var endIndex = Math.min(startIndex + boxesPerRow, participantCount);

    for (var k = startIndex; k < endIndex; k++) {
      var box = document.createElement("div");
      box.className = "box";
      box.textContent = availableNumbers[k];
      row.appendChild(box);
    }
  }
}

function removeNonWinnerBoxes(winnerNumber) {
  var boxes = document.getElementsByClassName("box");
  for (var i = boxes.length - 1; i >= 0; i--) {
    if (parseInt(boxes[i].textContent) !== winnerNumber) {
      boxes[i].remove();
    }
  }
  
}

var availableNumbers = [];

function createTirage() {
  var participantCount = document.getElementById("participant").value;
  var tirageContainer =
    document.getElementsByClassName("box-container")[0];
  tirageContainer.innerHTML = "";
  document.getElementById("winnerText").textContent = "";

  availableNumbers = [];

  for (var i = 1; i <= participantCount; i++) {
    availableNumbers.push(i);
  }

  var boxesPerRow = 4;
  var rows = Math.ceil(participantCount / boxesPerRow);

  for (var j = 0; j < rows; j++) {
    var row = document.createElement("div");
    row.className = "box-row";
    tirageContainer.appendChild(row);

    var startIndex = j * boxesPerRow;
    var endIndex = Math.min(startIndex + boxesPerRow, participantCount);

    for (var k = startIndex; k < endIndex; k++) {
      var box = document.createElement("div");
      box.className = "box";
      box.textContent = availableNumbers[k];
      row.appendChild(box);
    }
  }
}


function startTirage() {
  var boxes = document.getElementsByClassName("box");
  var winnerIndex;
  var highlightInterval;
  var interval = 0; // Intervalle initial

  var toggleHighlight = function () {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove("highlight");
    }

    if (availableNumbers.length > 0) {
      winnerIndex = Math.floor(Math.random() * availableNumbers.length);
      var randomNumber = availableNumbers[winnerIndex];
      boxes[randomNumber - 1].classList.add("highlight");

      // Augmente progressivement l'intervalle
      interval += 2; // Augmentation de 10 ms à chaque appel
      clearInterval(highlightInterval); // Efface l'ancien intervalle
      highlightInterval = setInterval(toggleHighlight, interval); // Crée un nouvel intervalle
    }
  };

  highlightInterval = setInterval(toggleHighlight, interval);

  setTimeout(function () {
    clearInterval(highlightInterval);
    var winnerNumber = availableNumbers[winnerIndex];
    boxes[winnerNumber - 1].classList.remove("highlight");
    boxes[winnerNumber - 1].classList.add("winner");
  }, 8000);
}
