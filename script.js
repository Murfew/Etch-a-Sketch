function initializeGrid(size) {

    const gridContainer = document.getElementById("grid")

    for (let i = 0; i < size; i++) {

        const gridRow = document.createElement("div")
        gridRow.setAttribute("class", "row")
        gridContainer.appendChild(gridRow)


        for (let j = 0; j < size; j++) {

            const gridItem = document.createElement("div")
            gridItem.setAttribute("class", "item")

            gridItem.addEventListener("mouseover", () => {
                gridItem.classList.add("colored")
            })

            gridRow.appendChild(gridItem)
        }
    }
}


const gridContainer = document.getElementById("grid")
const newGridBtn = document.getElementById("newGrid")
newGridBtn.addEventListener("click", () => {
    let newSize = prompt("Enter a size for the grid")

    if (newSize > 100) {
        alert("Size cannot be greater than 100!")
    } else if (newSize) {

        gridContainer.replaceChildren()

        initializeGrid(newSize)
    }
})

initializeGrid(16)