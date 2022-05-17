const timeSection = document.getElementById('currentDay');
timeSection.textContent = moment().format('dddd, MMMM Do');

const currentHour = moment().hour();
console.log(currentHour);
const textAreaList = document.querySelectorAll('textarea');

const saveTasksArray = [];


textAreaList.forEach(element => {
    const idHour = parseInt(element.id);
    if(idHour < currentHour) {
        element.classList.add('past');
    }
    else if(idHour === currentHour) {
        element.classList.add('present');
    }
    else {
        element.classList.add('future');
    }
});


const saveTaskBtn = document.querySelectorAll('button');
saveTaskBtn.setAttribute('tasks', )
saveTaskBtn.forEach(element => {
element.addEventListener('click', handleSaveButton);


});

handleSaveButton = (event) => {
    let tasks = document.ge
    localStorage.setItem('saveBtn', JSON.stringify(tasks)) 
    

}