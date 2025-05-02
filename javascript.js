const getMainDiv = document.querySelector('#main-container');



// for(let i=1; i<=256;i++)
// {
//     const createDiv = document.createElement('div');
//     createDiv.classList.add('box')
//     getMainDiv.appendChild(createDiv);
// }

//
function createBoxes(){

    for(let i=1; i<=256;i++)
        {
            const createDiv = document.createElement('div');
            createDiv.classList.add('box')
            getMainDiv.appendChild(createDiv);
        }  
}


//functoin to return a random number between 0-255 for our RGB
function createRGB()
{
    return Math.floor(Math.random() * (255-0))
}

for(let x=0 ; x<=255; x++)console.log(createRGB());


//getting all the divs with class box, and setting an addEventListener for each
const getDivs = document.querySelectorAll('.box');

// console.log(getDivs);
getDivs.forEach(item=>{

    item.addEventListener('mouseover', ()=>{

        // console.log(item);
        //css for background color calling a function to get the number of values
        item.style.backgroundColor = `rgb(${createRGB()},${createRGB()},${createRGB()} )`;
        //.classList.add('box_active');

        //using setTimeout to change it to white or it resets
        setTimeout(() => {
           //item.classList.remove('box_active');
           item.style.backgroundColor = 'white'
        }, 1000);



    })


})
