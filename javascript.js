const getMainDiv = document.querySelector('#main-container');



for(let i=1; i<=256;i++)
{
    const createDiv = document.createElement('div');
    createDiv.className.add('.box');
    createDiv.style.backgroundColor='black';
    getMainDiv.appendChild(createDiv);
}