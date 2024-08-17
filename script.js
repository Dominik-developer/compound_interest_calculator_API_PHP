document.getElementById("compundInterestForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("time").value;

    fetch(`API.php?principal=${principal}&rate=${rate}&time=${time}`)
    .then(response => response.json())
    .then(data => {
        const resultsTable = document.getElementById("resultsTable");
        let tableContent = "";

        data.forEach(item => {
            tableContent += `
            <tr>
                <td>${item.year}</td><td>${item.amount} $</td>
            </tr>
            `;
        });
        resultsTable.querySelector("tbody").innerHTML = tableContent;
        resultsTable.style.display = "table";
    })
    .catch(error => console.error("Błąd:", error));

    });