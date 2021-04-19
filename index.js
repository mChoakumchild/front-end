

//userinfo
let userLogin = document.querySelector("form#userLogin"); //form
let userName = document.querySelector("UserLogin li usersname") //username input
let addRecipe = false;

//new recipe
let newRecipeButton = document.querySelector("input#new-recipe");
let newRecipeName = document.querySelector("input.newrecipe")
let newRecipeDisplayButton = document.querySelector("button#displayNewRecipe")
let newRecipeInfoButton = document.querySelector("input#new-recipe")
let submitnewRecipe = document.querySelector("input#submitNewRecipe")

// Collection of all inputs to make a new recipe
let recipeCollection = document.querySelector("div#recipeCollection")

//steps form userinput and submit button and parent element where list should go

// ingredient form userinput and submit button and parent element where list should go
let form = document.querySelector("form#addIngredient") // form containing child elements like textbox and submit
let taskDescriptionText = form.querySelector("#new-ingredient") // textbox
let ingredientList = document.querySelector("ul#ingredients") // The parent element where user input text elements go

let num = 0; 
let deleteB; 

// other older recipes
let recipesList = document.querySelector("ul#recipes")

function newRecipeInputs (addRecipe) { 
if (addRecipe) {
  recipeCollection.style.display = "block"
} else {
  recipeCollection.style.display = "none"
}
}

newRecipeInputs (addRecipe)
// This is the display new recipe button
newRecipeDisplayButton.addEventListener("click", (event) =>{
  event.preventDefault()
  addRecipe = !addRecipe;
  newRecipeInputs(addRecipe)


})
// This is the submit new recipe button
submitnewRecipe.addEventListener("click", (event)=> { 
  event.preventDefault()
// We need to add a new recipe object to the recipes array
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
      "Content-text": "application/json"
      },
      body: JSON.stringify({
      recipes: recipes.name.push({
        name: newRecipeName,
        "likes": 0,
        "servings" : 0,
        "foodpic": "",
        "ingredients": [""],
        "steps": [""],
        "date": "04/19/21"
        })
      })  
    })
  .then(res => res.json())
  .then(res => {
   

  })
})


  userLogin.addEventListener("submit", (event) => {
    event.preventDefault()
    let userName = userLogin.li.usersname.value 
    let usernameinput = userName.value
 // if the submit username and password button is pressed
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(res => {
      res.forEach(user => { 
        if (user.username == usernameinput){
          console.log("welcome")
          recipeCollection.style.display = "block"
          user.recipes.forEach(recipe => { 
            let recipetitle = document.createElement('li')  // Appends the name of each prior recipe to a new block
            recipetitle.innerText = recipe.name
            recipesList.append(recipetitle)
          }
          )
        }
        else 
        {
          console.log("Try again")
          recipeCollection.style.display = "none"
        }
      })
    })
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
  ingredientList.append(newTask)
}

// Delete function
ingredientList.addEventListener("click", (e) => {  //listens to children of parent taskList ("ul") element
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







