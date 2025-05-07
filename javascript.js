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
        setBoxEvents();
}
//functoin to return a random number between 0-255 for our RGB
function createRGB()
{
    return Math.floor(Math.random() * (256))
}


function setBoxEvents(){
    //getting all the divs with class box, and setting an addEventListener for each
const getDivs = document.querySelectorAll('.box');

// console.log(getDivs);
getDivs.forEach(item=>{

    item.addEventListener('mouseover', ()=>{


        // console.log(item);
        
        //css for background color calling a function to get the number of values
        
        item.style.backgroundColor = `rgb(${createRGB()},${createRGB()},${createRGB()} )`;
        //.classList.add('box_active');


        // //using setTimeout to change it to white or it resets
        // createWipeTime = setTimeout(() => {
        //    //item.classList.remove('box_active');
        //    item.style.backgroundColor = 'white'
        // }, 1000);

      


    })


})

}




createBoxes();







function setUserInput(input){


    console.log(`in the function right now ${input}`);

 
    getMainDiv.innerHTML='';


    let getTotalBoxes = (input*input);
    let boxDimensions = (960 / input);



    for(let i=1; i<=getTotalBoxes;i++)
        {


            
            const createDiv = document.createElement('div');
            createDiv.classList.add('box')
            createDiv.style.width = `${boxDimensions}px`;
            createDiv.style.height= `${boxDimensions}px`;

            





            getMainDiv.appendChild(createDiv);
        }  

        setBoxEvents();

};

const btnInput = document.querySelector('button');







btnInput.addEventListener('click',()=>{


    let userInput =  prompt('enter a number');
    let convertUserinput = parseInt(userInput);

    // console.log(convertUserinput);


    if(convertUserinput<= 100 && convertUserinput >= 1)
    {
        
    setUserInput(convertUserinput);
    }
    else{
        alert('Enter a number between 1 and 100');
    }





})
