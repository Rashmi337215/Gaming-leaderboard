let leaderboard = [];

function addPlayer() {
  let name = document.getElementById("playerName").value.trim();
  let score = parseInt(document.getElementById("playerScore").value);

  if (!name || isNaN(score)) {
    alert("Please enter valid details!");
    return;
  }

  let existing = leaderboard.find(p => p.name.toLowerCase() === name.toLowerCase());

  if (existing) {
    existing.score = score;
  } else {
    leaderboard.push({ name, score });
  }

  leaderboard.sort((a, b) => b.score - a.score);
  displayTable();
  document.getElementById("playerName").value = "";
  document.getElementById("playerScore").value = "";
}

function displayTable() {
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  leaderboard.forEach((player, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${player.name}</td>
        <td>${player.score}</td>
        <td><button class="action-btn" onclick="deletePlayer(${index})">Delete</button></td>
      </tr>
    `;
  });
}

function deletePlayer(index) {
  leaderboard.splice(index, 1);
  displayTable();
}

function resetData() {
  leaderboard = [];
  displayTable();
}

function searchPlayer() {
  let searchText = document.getElementById("searchInput").value.toLowerCase();
  let rows = document.querySelectorAll("#tableBody tr");

  rows.forEach(row => {
    let name = row.children[1].innerText.toLowerCase();
    row.style.display = name.includes(searchText) ? "" : "none";
  });
}

