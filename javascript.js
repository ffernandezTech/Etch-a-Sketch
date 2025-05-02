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

getDivs.forEach(item=>{

    item.addEventListener('mouseover', ()=>{

        // console.log(item);
        item.classList.add('box_active');
        setTimeout(() => {
           item.classList.remove('box_active');
        }, 1000);



    })


})
