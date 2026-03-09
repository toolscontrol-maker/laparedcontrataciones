document.addEventListener("DOMContentLoaded", () => {

    const wallGrid = document.getElementById("wallGrid");

    // Total spaces
    const totalSpaces = 100;

    // Simulated reserved spaces (15 as shown in the text)
    // We generate some random indices between 0 and 99 to mark them as reserved
    const reservedIndices = new Set();
    while (reservedIndices.size < 15) {
        const randomPos = Math.floor(Math.random() * totalSpaces);
        reservedIndices.add(randomPos);
    }

    // Generate the grid
    for (let i = 0; i < totalSpaces; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");

        if (reservedIndices.has(i)) {
            cell.classList.add("reserved");
            cell.title = "Espacio Ocupado";
        } else {
            cell.title = `Espacio #${i + 1} Disponible`;
        }

        wallGrid.appendChild(cell);
    }

    // Dynamic Pricing Logic
    const basePrice = 5;
    const currentPrice = basePrice + reservedIndices.size;
    const nextPrice = currentPrice + 1;

    // Update DOM
    const currentPriceEl = document.getElementById("currentPrice");
    const heroCurrentPriceEl = document.getElementById("heroCurrentPrice");
    const nextPriceEl = document.getElementById("nextPrice");

    if (currentPriceEl) {
        currentPriceEl.innerText = currentPrice;
    }
    if (heroCurrentPriceEl) {
        heroCurrentPriceEl.innerText = currentPrice;
    }
    if (nextPriceEl) {
        nextPriceEl.innerText = nextPrice;
    }

});
