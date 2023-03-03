const domGrid = document.getElementById('grid');
const domBtnPlay = document.getElementById('btnPlay');

loadGrid();

function loadGrid(){

    for(let i = 0; i < 100; i++){

        let box = document.createElement('div');
        box.classList.add('box');
        box.innerText = i;
        domGrid.append(box);

        box.addEventListener('click', function(){

            this.classList.toggle('active');
            console.log(`Cella cliccata: ${i}`);

        });

    }




}