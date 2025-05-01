const getMainDiv = document.querySelector('#main-container');



for(let i=1; i<=256;i++)
{
    const createDiv = document.createElement('div');
    createDiv.classList.add('.box');
    getMainDiv.appendChild(createDiv);
}