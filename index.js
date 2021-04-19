let form = document.querySelector("#create-task-form") // form containing child elements like textbox and submit
let taskDescriptionText = document.querySelector("#new-task-description") // textbox
let taskList = document.querySelector("ul#tasks") // The parent element where user input text elements go
let taskHeader = document.querySelector("h2") // Location where the selector and option tag elements go
let userLogin = document.querySelector("#UserLogin");
let recipeCollection = document.querySelector("#recipeCollection")
let userName = document.querySelector("UserLogin li usersname")
let num = 0; //Number that iterates for giving tags, ids
let deleteB; //delete button

userLogin.addEventListener("submit", (event) => {
  let usernameinput = userName.value
  let userpasswordinput = userpassword.value
// if the create new account button is pressed
 if (userLogin.createbutton == event.target){
    let userName = userLogin.li.usersname.value 

        fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
        "Content-text": "application/json"
        },
        body: JSON.stringify({
        username: event.target[0].value,
        recipies: [],
        profilepic: ""
    }) })
      .then((r) => r.json())
      .then((userObj) => console.log(userObj));
    }
 // if the submit username and password button is pressed
  else {
      
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(res => {
      res.forEach(user => { 
        if (user.username == usernameinput){
          console.log("welcome")
          recipeCollection.style.display = "block"
        }
        else 
        {
          console.log("Try again")
          recipeCollection.style.display = "none"
        }
      })
    })
  }
})



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
    //Delete Button
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

  //newTask.append(usrTxt)
  newTask.append(editB)
  newTask.append(deleteB)
  taskList.append(newTask)
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
    indx.childNodes[0].textContent = taskDescriptionText.value  //this edits the text in indx without changing the child nodes. (This odccurs with indx.innerText)
  }
  return num;
  });








