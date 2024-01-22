function initializeGrid(size) {

    const gridContainer = document.getElementById("grid")
    
    for (let i = 0; i < size; i++) {

        const gridRow = document.createElement("div")
        gridRow.setAttribute("class", "row")
        gridContainer.appendChild(gridRow)


        for (let j = 0; j < size; j++) {

            const gridItem = document.createElement("div")
            gridItem.setAttribute("class", "item")
            gridRow.appendChild(gridItem)
        }
    }
}

initializeGrid(16)