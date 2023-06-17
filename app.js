let container = document.querySelector(".box");
        let gridButton = document.getElementById("create_grid");
        let clearGridButton = document.getElementById("clear_grid");
        let gridWidth = document.getElementById("width-range");
        let gridHeight = document.getElementById("height-range");
        let colorButton = document.getElementById("color-input");
        let eraseBtn = document.getElementById("erase");
        let paintBtn = document.getElementById("paint");
        let widthValue = document.getElementById("width-value");
        let heightValue = document.getElementById("height-value");


        let erase = false;
        let draw = false;

        function createGrid() {
            container.innerHTML = "";

            for (let i = 0; i < gridHeight.value; i++) {
                let row = document.createElement("div");
                row.classList.add("grid-row");
                for (let j = 0; j < gridWidth.value; j++) {
                    let col = document.createElement("div");
                    col.classList.add("grid-column");

                    col.addEventListener("mousedown", mouse_click);
                    col.addEventListener("mousemove", mouse_moving);
                    col.addEventListener("mouseup", mouse_release);

                    row.appendChild(col);

                }

                container.appendChild(row);
            }

        }
        gridButton.addEventListener("click", createGrid);

        clearGridButton.addEventListener("click", clearGrid);

        function clearGrid() {
            container.innerHTML = "";
        }


        function mouse_click() {
            draw = true;
            this.style.backgroundColor = erase ? "transparent" : colorButton.value;

        }

        function mouse_moving() {
            if (draw) {
                this.style.backgroundColor = erase ? "transparent" : colorButton.value;

            }
        }

        function mouse_release() {
            draw = false;
        }

        eraseBtn.addEventListener("click", erasing);

        function erasing() {
            erase = !erase;
            eraseBtn.classList.add("active");
            eraseBtn.style.backgroundColor = 'lightgreen';
            paintBtn.style.backgroundColor = '#cd31f4';


        }

        paintBtn.addEventListener("click", painting);

        function painting() {
            erase = false;
            eraseBtn.classList.remove("active");
            paintBtn.classList.add("active");
            paintBtn.style.backgroundColor = 'lightgreen';
            eraseBtn.style.backgroundColor = '#cd31f4';
        }
