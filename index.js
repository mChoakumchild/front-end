//Title
let recipebooktitle = document.querySelector("h1")
//USER SIGN IN
let userLogin = document.querySelector("form#userLogin"); //form
let userNameInput = document.querySelector("input#userName") //username input
//Edit option button
//let newRecipeDisplayButton = document.querySelector("button#displayNewRecipe")

//NEW RECIPE
let newRecipeForm = document.querySelector("form#newrecipe");// Name Form
let newRecipeTitle = document.querySelector("h2#recipename"); // Recipe Title
let newRecipeName = document.querySelector("input.newrecipe")
// LIST OF recipes
let recipesList = document.querySelector("ul#recipes")
// Collection of all inputs to make a new recipe
let recipeCollection = document.querySelector("div#recipeCollection")
//STEPS
//steps form userinput and submit button and parent element where list should go
let stepstext = document.querySelector("textarea#newstep")
let stepsButton = document.querySelector("form#steps")
let stepsList = document.querySelector("ol#steps")
//INGREDIENTS
// ingredient form userinput and submit button and parent element where list should go
let ingredientform = document.querySelector("form#addIngredient") // form containing child elements like textbox and submit
let ingredientText = ingredientform.querySelector("#new-ingredient") // textbox
let ingredientList = document.querySelector("ul#ingredients") // The parent element where user input text elements go
//DELTE and SUBMIT a NEW RECIPE
//Submit recipe as a new recipe button
let submitnewRecipe = document.querySelector("button#submitNewRecipe")
//Delete a recipe
let deleteRecipe = document.querySelector('button#deleteRecipe')
let deleteB; 
//Ingredients Array
let ing = []
//Steps Array
let steps = []
//Time since 1970
let date = d.getTime();


// function newRecipeInputs (addRecipe) { 
// if (addRecipe) {
//   recipeCollection.style.display = "block"
// } else {
//   recipeCollection.style.display = "none"
// }
// }

//newRecipeInputs (addRecipe)


// This is the display new recipe button
// newRecipeDisplayButton.addEventListener("click", (event) =>{
//   event.preventDefault()
//   addRecipe = !addRecipe;
//   newRecipeInputs(addRecipe)
// })


// EVENT LISTENER for new recipe
submitnewRecipe.addEventListener("submit", (event)=> { 
  event.preventDefault()
// let newingr = steps.push(stepsList.childNodes.innerText)
//let newsteps = ing.push(ingredientList.childNodes.innerText)
  //  let newname = newRecipeName.value
  // let newDate = 
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
      "Content-text": "application/json"
      },
      body: JSON.stringify({
      recipes: recipes.push({
        "name": newname,
        "likes": 0,
        "servings" : 0,
        "foodpic": "",
        "ingredients": newingr,
        "steps": newsteps,
        "date": "04/19/21"
        })
      })  
    })
  .then(res => res.json())
  .then(res => {

  })
})

// // EVENT LISTENER login
//   userLogin.addEventListener("submit", (event) => {
//     event.preventDefault()
//     let usernameinput = userNameInput.value 
//  // Get all USERS
//     fetch("http://localhost:3000")
//     .then(res => res.json())
//     .then(res => {
//       res.forEach(user => { 
//         // USER DISPLAY OPTIONS
//         //1. BUTTONS WITH "USER NAME"
//         //2. LOGIN FORM

//       //let userNameTag = document.createElement('button')

//       //DISPLAY THE INFO IF THE USERNAME MATCHES THE NAME
//         if (user.username == usernameinput){
       
//           user.recipes.forEach(recipe => { 
//             //LIST ALL THIS USER'S recipes  
//             let recipetitle = document.createElement('li')  
//             recipetitle.innerText = recipe.name
//             recipesList.append(recipetitle)
//           }
//           )
//         }
       
//       })
//     })
//   })




//EVENT LISTENER for the new name button
newRecipeForm.addEventListener("submit", (event)=>{
  event.preventDefault()
  newRecipeTitle.innerText = newRecipeName.value;


})

//EVENT LISTENER for submit direction button
stepsButton.addEventListener("submit", (event)=> {
  event.preventDefault();
  newLine(stepstext, stepsList)

})

// EVENT LISTENER for Submit Ingredient Button
form.addEventListener("submit", (e) => {  
  e.preventDefault()
  newLine(recipeText,ingredientList) 
});

//FUNCTION creates steps and ingredients LISTS
function newLine(stepDescription, list) { 
  let newLi = document.createElement('li') 
  newLi.innerText = stepDescription.value 
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
  newLi.append(editB)
  newLi.append(deleteB)
  list.append(newLi)

// EVENTLISTENER for DELETE AND EDIT


editB.addEventListener("click", (e)=> {
  e.preventDefault()
  let indx = e.target.closest('li');  
  indx.innerText = stepDescription.value;

})

deleteB.addEventListener("click", (e)=> {
  e.preventDefault()
  let indx = e.target.closest('li');  
  indx.remove(); 
})

}
  // list.addEventListener("click", (e) => {  
  //   let indx = e.target.closest('li');  
  //   if (!indx) return;       
  //   if (e.target.matches("button[type=delete]")){   //delete button
  //     indx.remove();   
  //   }
  //   else if(e.target.matches("button[type=edit]")) { //edit button
  //     indx.childNodes[0].textContent = stepDescription.value  
  //   }
  //   });

  // }










// New Zoom Call?
