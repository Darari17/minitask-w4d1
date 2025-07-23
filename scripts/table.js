// tambah baris baru
const tbody = document.querySelector("tbody");
const tr = document.createElement("tr");
const td1 = document.createElement("td");
const td2 = document.createElement("td");
td1.innerText = "Charlie";
td2.innerText = 92;

tr.append(td1, td2);
tbody.append(tr);

// ubah nilai bob
const bob = document.querySelector("tbody>tr:nth-child(2)>td:nth-child(2)");
bob.innerText = 89;

// top scorer alice
const topScore = document.querySelector("tbody>tr");
topScore.className = "top-scorer";

// AVerage
const table = document.querySelector("table");
const tfoot = document.createElement("tfoot");
const newTr = document.createElement("tr");
const newTd1 = document.createElement("td");
const newTd2 = document.createElement("td");
const total = document.querySelectorAll("tbody>tr>td:nth-child(2)");
const arr = [];
for (let i = 0; i < total.length; i++) {
  arr.push(parseInt(total[i].textContent));
}

newTd1.innerText = "Average";
newTd2.innerText = arr.reduce((a, b) => a + b) / total.length;

newTr.append(newTd1, newTd2);
tfoot.append(newTr);
table.append(tfoot);
tfoot.style.backgroundColor = "black";
