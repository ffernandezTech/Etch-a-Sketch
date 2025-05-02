const getMainDiv = document.querySelector('#main-container');



for(let i=1; i<=256;i++)
{
    const createDiv = document.createElement('div');
    createDiv.classList.add('box')
    getMainDiv.appendChild(createDiv);
}

function createBoxes(){

    for(let i=1; i<=256;i++)
        {
            const createDiv = document.createElement('div');
            createDiv.classList.add('box')
            getMainDiv.appendChild(createDiv);
        }  
}

const getDivs = document.querySelectorAll('.box');

// console.log(getDivs);

function createRGB()
{
    return Math.floor(Math.random() * (255-0))
}

for(let x=0 ; x<=255; x++)console.log(createRGB());




getDivs.forEach(item=>{

    item.addEventListener('mouseover', ()=>{

        // console.log(item);

        item.style.backgroundColor = `rgb(${createRGB()},${createRGB()},${createRGB()} )`;
        //.classList.add('box_active');
        setTimeout(() => {
           //item.classList.remove('box_active');
           item.style.backgroundColor = 'white'
        }, 1000);



    })


})
