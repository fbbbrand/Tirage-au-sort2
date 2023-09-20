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

function startTirage() {
  var boxes = document.getElementsByClassName("box");
  var winnerIndex;
  var highlightInterval;

  var toggleHighlight = function () {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove("highlight");
    }

    if (availableNumbers.length > 0) {
      winnerIndex = Math.floor(Math.random() * availableNumbers.length);
      var randomNumber = availableNumbers[winnerIndex];
      boxes[randomNumber - 1].classList.add("highlight");
    }
  };

  highlightInterval = setInterval(toggleHighlight, 100);

  setTimeout(function () {
    clearInterval(highlightInterval);
    var winnerNumber = availableNumbers[winnerIndex];
    boxes[winnerNumber - 1].classList.remove("highlight");
    boxes[winnerNumber - 1].classList.add("winner");
  }, 8000);
}
