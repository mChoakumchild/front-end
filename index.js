//Title
// let recipebooktitle = document.querySelector("h1");

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
// submitnewRecipe.addEventListener("submit", (event) => {
//   event.preventDefault();
//   fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       "Content-text": "application/json",
//     },
//     body: JSON.stringify({
//       recipes: recipes.push({
//         name: newname,
//         likes: 0,
//         servings: 0,
//         foodpic: "",
//         ingredients: newingr,
//         steps: newsteps,
//         date: "04/19/21",
//       }),
//     }),
//   })
//     .then((res) => res.json())
//     .then((res) => {});
// });

//EVENT LISTENER for the new name button
// newRecipeForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   newRecipeTitle.innerText = newRecipeName.value;
// });

// //EVENT LISTENER for submit direction button
// stepsButton.addEventListener("submit", (event) => {
//   event.preventDefault();
//   newLine(stepstext, stepsList);
// });

// // EVENT LISTENER for Submit Ingredient Button
// ingredientform.addEventListener("submit", (e) => {
//   e.preventDefault();
//   newLine(recipeText, ingredientList);
// });

let userBox = document.querySelector("ul#userlist")
let recipelist = document.querySelector("ul#recipes")
let ingredientUl = document.querySelector("ul#ingredientsz");
let stepsOl = document.querySelector("ol#steps");

// Unstable Login Form

let userInput = document.querySelector("form#userlogin")// form
let userName = document.querySelector("input.userid") // txtbox

userInput.addEventListener('submit', (e)=> {
  e.preventDefault()
let username  = userName.value
console.log(username)
login(username)
})

// UNstable login function

function login(username) { 

fetch(`http://localhost:3000/users?_embed=recipes&username=${username}`)
  .then((r) => r.json())
  .then((userObj) => {
    if (userObj.length > 0) {
      userObj = userObj[0]
    showUserInformation(userObj)
    }
    else {
      alert("No user exists")
    }
  });
}

// USER INFO AND RECIPES

function showUserInformation(userObj) {
  

    let userimage = document.createElement("img")
    userimage.src = userObj.profilepic;
   
    userBox.innerText = "" // Reset images
    recipelist.innerText = ""  // reset Previous Recipe

      userObj.recipes.forEach((recipeobj)=> {  
      let recipeli = document.createElement('li')
      recipeli.innerText = recipeobj.name
      recipelist.append(recipeli)
        //EVENTLISTENR TO RECIPE IN RECIPE LIST
        recipeli.addEventListener("click", (event) => {
          newRecipe(recipeobj);
        })
      
      })
  
    userBox.append(userimage)
    // let recipeArray = userObj.recipes;
    // // Recipe Display Function
    // newRecipe(recipeArray[0]);
    

}


recipeDiv = document.querySelector("div#displaydiv");
//FUNCTION creates steps and ingredients LISTS
function newRecipe(recipe) {
  ingredientUl.innerText = ""
  stepsOl.innerText = ""
  let recipeName = recipe.name;
  let recipeLabel = document.querySelector("h2#recipename");
  recipeLabel.innerText = recipeName;

  let foodpic = document.querySelector("img#foodpic");
  foodpic.src = recipe.foodpic;

  let servingSize = document.querySelector("li#servingsize");
  servingSize.innerText = `Servings: ` + recipe.servings;

  let likeCount = document.querySelector("li#likecount");
  likeCount.innerText = `${recipe.likes} \u2665❤️✈️`; // cmd + ctr + space form imogi

  let ingredients = recipe.ingredients;


  ingredients.forEach((item) => {
 
    newList(ingredientUl, item)
  });

  let steps = recipe.steps;
  
  steps.forEach((item) => {
    newList(stepsOl,item)
  });
}

function newList(list, item) {
  
  let newLi = document.createElement("li");
  newLi.innerText = item;
  //Delete Button
  let deleteB = document.createElement("button");
  deleteB.innerText = "Delete";
  deleteB.type = "delete";
  deleteB.class = "usrInput";
  // creating an edit button
  let editB = document.createElement("button");
  editB.innerText = "Edit";
  editB.type = "edit";
  editB.class = "usrInputEdit";
  // appending new elements to existing ones in the document.
  newLi.append(editB);
  newLi.append(deleteB);
  list.append(newLi);
}
//   // EVENTLISTENER for DELETE AND EDIT

//   editB.addEventListener("click", (e) => {
//     e.preventDefault();
//     let indx = e.target.closest("li");
//     indx.innerText = stepDescription.value;
//   });

//   deleteB.addEventListener("click", (e) => {
//     e.preventDefault();
//     let indx = e.target.closest("li");
//     indx.remove();
//   });
// }
// // list.addEventListener("click", (e) => {
// //   let indx = e.target.closest('li');
// //   if (!indx) return;
// //   if (e.target.matches("button[type=delete]")){   //delete button
// //     indx.remove();
// //   }
// //   else if(e.target.matches("button[type=edit]")) { //edit button
// //     indx.childNodes[0].textContent = stepDescription.value
// //   }
// //   });

// // }

// // New Zoom Call?
