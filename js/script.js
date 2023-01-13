//Creates elements inside div using loop and increases certain properties for each loop done
const divRad = document.createElement('div');
document.body.append(divRad);

let paddingSizeNumber = 0;
let marginSizeNumber = 10;
let textSizeNumber = 10;
let colorNumber = 120;
for (let i = 0; i < 5; i++) {
    const p = document.createElement('p');
    divRad.append(p);
    p.innerText = `Rad ${i+1}`;

    p.style.margin = 'auto';
    p.style.marginTop = `${marginSizeNumber}px`;
    p.style.padding = `${paddingSizeNumber}px`;
    p.style.textAlign = 'center';
    p.style.fontSize = `${textSizeNumber}px`;
    p.style.background = `hsl(${colorNumber}, 90%, 85%)`;
    p.style.color = '#6e6ef7';
    p.style.fontWeight = 'bold';
    p.style.width = '45rem';

    paddingSizeNumber += 2;
    marginSizeNumber += 7;
    textSizeNumber += 10;
    colorNumber += 20;
}

//Creates a div container and decides its properties
const divContainer = document.createElement('div');
document.body.append(divContainer);
divContainer.style.display = 'flex';
divContainer.style.justifyContent = 'center';
divContainer.style.flexWrap = 'wrap';
divContainer.style.gap = '10rem';
divContainer.style.marginTop = '3rem';
divContainer.style.marginLeft = 'auto';
divContainer.style.marginRight = 'auto';
divContainer.style.padding = '4rem';
divContainer.style.border = '2px solid black';
divContainer.style.width = '40.5%';

const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberArrayReversed = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const numberArrayStr = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

//Creates 3 lists with 10 numbers with if else methods for specifics

for (let i = 0; i < 3; i++) {
    const divLista = document.createElement('div');
    divContainer.append(divLista);
    divLista.style.background = '#a8a8f0';
    divLista.style.padding = '10px';
    divLista.style.display = 'flex';
    divLista.style.flexFlow = 'column';

    //Puts array content in p elements and creates their properties
    for (let j = 0; j < numberArray.length; j++) {
        const p = document.createElement('p');
        divLista.append(p);
        if (i == 0) {
            p.innerText = `${numberArray[j]}`;
            p.style.width = '50px';
        } else if (i == 1) {
            p.innerText = `${numberArrayReversed[j]}`;
            p.style.width = '50px';
            p.style.textAlign = 'center';
        } else if (i == 2) {
            p.innerText = `${numberArrayStr[j]}`;
            p.style.width = '60px';
            p.style.textAlign = 'right';
        }

        p.style.margin = '0';
        p.style.fontSize = '20px';


        //Decides which colors and patterns the lists will get
        if (numberArray[j] % 2 == 1) {
            if (i == 0 || i == 2) {
                p.style.background = 'white';
                p.style.color = 'black';
            } else {
                p.style.background = 'black';
                p.style.color = 'white';
            }
        } else {
            if (i == 0 || i == 2) {
                p.style.background = 'black';
                p.style.color = 'white';
            } else {
                p.style.background = 'white';
                p.style.color = 'black';
            }
        }

        //Decides which p elements will have transparent background
        if (numberArray[j] == 4 && i == 0) {
            p.style.background = 'transparent';
        } else if (numberArrayReversed[j] == 8 && i == 1) {
            p.style.background = 'transparent';
        }
        else if (numberArrayStr[j] == 'sex' && i == 2) {
            p.style.background = 'transparent';
        }

    }

}