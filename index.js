let form = document.querySelector("#create-task-form") // form containing child elements like textbox and submit
let taskDescriptionText = document.querySelector("#new-task-description") // textbox
let taskList = document.querySelector("ul#tasks") // The parent element where user input text elements go
let taskHeader = document.querySelector("h2") // Location where the selector and option tag elements go
let prioritytable = {Red: "High Priority", Yellow: "Medium Priority", Green: "low Priority" } //table of priority relations
document.addEventListener("DOMContentLoaded", () => {
//let deleteB;

});
let num = 0; //Number that iterates for giving tags, ids
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k"] //array of numbers to give element's tags
let deleteB; //left over from previous version

form.addEventListener("submit", (e) => {  //event listener hears "submit" event from form element
  e.preventDefault()//keep from refreshing
  num +=1; // number iterates up 1
  usrInfo(num) //calls a function usrInfo for the users information to be obtained need num to be passed in
  return num
});


//Stores user input and creates new innerText, input text box, and button
function usrInfo(num) { 
//Storing User Information
  let newTask = document.createElement('li') //create new li element. In future iteration this should be a table element
  newTask.innerText = taskDescriptionText.value //stores usr text input into new li
  colorChecker(newTask)   //calls function to change the color of the text
//Creating a New Text Box
  let usrTxt = document.createElement('input')  //creates a new text box called usrTxt
  usrTxt.id = alphabet[num]; //gives it a letter id
// Creating a Deletion Button
  let deleteB = document.createElement('button') 
  deleteB.innerText = "Delete"
  deleteB.type = "delete"
  deleteB.class = "usrInput"
// creating an edit button
  let editB = document.createElement('button') 
  editB.innerText = "Edit"
  editB.type = "edit"
  editB.class = "usrInputEdit"
  // appending new elements to existing ones in the document. 
  taskList.append(newTask)
  newTask.append(usrTxt)
  newTask.append(editB)
  newTask.append(deleteB)
}

// Delete function
taskList.addEventListener("click", (e) => {  //listens to children of parent taskList ("ul") element
  e.preventDefault()   //This prevents page refresh
  let indx = e.target.closest('li');   //.closest() method finds element closest to the target with tag "li"
  if (!indx) return;        //If there is no element the function ends
  //console.log(e.target)
  if (e.target.matches("button[type=delete]")){   //if the target matches the element type "button"...
    indx.remove();   ///the element with tag "li" is removed
    num -= 1;    //num increments down so new tags can be made
  }
  else if(e.target.matches("button[type=edit]")) {
    colorChecker(indx)
    indx.childNodes[0].textContent = taskDescriptionText.value  //this edits the text in indx without changing the child nodes. (This odccurs with indx.innerText)
  }
  return num;
  });

//Edit Function
// taskList.addEventListener("click", (e) => {
//   e.preventDefault()
//   let indx = e.target.closest('li');
//   if (!indx) return;
//   if (e.target.matches("button")){ 


// This function makes the 3 priority settings available in a drop down
//this is done using option elements withing a select element
function makepriorityoptions (taskList) {
  let newTaskopt = document.createElement('select')  //creating parent 'select' element
  
  // Create option tags for high, medium, and low priority
  let taskTextOne = document.createElement('option')
  taskTextOne.innerText = taskTextOne.value = `${prioritytable.Red}`
  let taskTextTwo = document.createElement('option')
  taskTextTwo.innerText = taskTextTwo.value = `${prioritytable.Yellow}`
  let taskTextThree = document.createElement('option')
  taskTextThree.innerText = taskTextThree.value = `${prioritytable.Green}`
  newTaskopt.append(taskTextOne, taskTextTwo, taskTextThree)  //appending the inner option elemnts to the select object
  taskList.append(newTaskopt)   // finally appending the new objects to taskHeader. Note that you can append elements that are not yet attached to the html
  
}
// Change color of text depending on value.


makepriorityoptions(taskList);

function colorChecker(newTask) { 
  let selectElement = document.getElementsByTagName("select")[0];  //This looks for elements with the select tag. Note that only 1 drop down option can be accessed at a time so the value of select is only 1 value,which is the value in the child option element.

  if (selectElement.value == prioritytable.Red){ 
    newTask.style.color = "red";   //sets the style.color of the li element to red
    console.log(newTask.style.color)
  }
  else if(selectElement.value == prioritytable.Yellow){ 
    newTask.style.color = "yellow";
  }
  else if (selectElement.value == prioritytable.Green){ 
    newTask.style.color = "green";
  }
  return newTask;
}


/// Comments on previous iteration
//Problem 1
//original stategy was to define a addEventListener to a specific delete button, but because the delete
//buttons are dynamically added to the webpage there would be no object for addEventListener to point to
//resulting in an error. One solution was to use document.addEventListener and within define a if else statment
//if the e.target was a button. However this had it's own problems. I needed to give each new button
// a unique id to delete it and it's associated li text. One way to querySelect id's that are numbers is 
// document.querySelector(`#${CSS.escape(indx)}`); where indx points to a numerical id value. To simplify
//this further it would be possible to define the addEventListener for the button when it is declared 
//within the submit addEventListener function. Unfortunetly I could not get querySelector to work with number
//selectors so I decided to change my strategy.
//Problem 2
// When I first defined the color changing function I tried to use a for Each statement on taskList.querySelectorAll("li")
//and use the callback funtion to change each li element in the arry to el.style.color = "color";
//this did not work.




//Random comments

 // let abx = document.querySelector(`#${CSS.escape(indx)}`); // previous iteration of 
    // taskList.remove(abx)
    //deleteChecker(num);
// function usrInfo (alphabet,num) {
//   Outer form
//   let descrBox = document.createElement('form')
//   descrBox.id = alphabet[num]
//   descrBox.className = "userPost"


// function deleteChecker(num){
//   for (let i = 0; i < num; i++) 
//   {
//     if (deleteB.id == i) 
//     {
//       let indx = deleteB.id;
//       let abx = document.querySelector(`#${CSS.escape(indx)}`);
//       taskList.remove(abx)
//     }
//   }
// }

// makepriorityoptions(taskList);

// function colorChecker (newTask) { 
// let selectElement = document.getElementsByTagName("select")[0];

// if (selectElement.value == prioritytable.Red){ 
//     newTask.innerText.fontcolor("red")

//   // taskList.querySelectorAll("li.input").forEach(el => {
//   //   console.log(el.value.innerText)
//   //     console.log(el.innerText.fontcolor("red"));
//   //     console.log(el)
//   // })
// }

// else if(selectElement.value == prioritytable.Yellow){ 
//   taskList.querySelectorAll("li").forEach(el => {
//     console.log(el)
//     el.style.color = "yellow";
//    })
//  }
//  else if (selectElement.value == prioritytable.Green){ 
//   taskList.querySelectorAll("li").forEach(el => {
//     console.log(el)
//     el.style.color = "green";
   
//    })
//  }
// }





