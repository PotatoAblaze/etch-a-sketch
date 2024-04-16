const container = document.querySelector("#container");
const sizeInput = document.querySelector("#grid-size-input");
const submitButton = document.querySelector("#size-submit-button");


function changeGridSize(e)
{
    if(!isNaN(sizeInput.value))
    {
        let size = sizeInput.value;
        if(size > 100) size = 100;
        else if (size <= 0) size = 1;

        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }

        for(let i = 0; i < size; i++)
        {
            const newRow = document.createElement("div");
            newRow.classList.add("grid-row");
            for(let j = 0; j < size; j++)
            {
                const newDiv = document.createElement("div");
                newDiv.classList.add("grid-box");

                newDiv.addEventListener("mouseenter", changeColor);
                newRow.appendChild(newDiv);
            }
            container.appendChild(newRow);
        }
    }
}

submitButton.addEventListener("click", changeGridSize);

function changeColor(event)
{
    event.target.style["backgroundColor"] = "pink";
}

