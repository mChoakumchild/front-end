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

let userBox = document.querySelector("ul#userlist");
let recipelist = document.querySelector("ul#recipes");
let ingredientUl = document.querySelector("ul#ingredients");
let stepsOl = document.querySelector("ol#steps");
let recipeCollection = document.querySelector("div#RecipeCollection");
let recipeLabel = document.querySelector("h2#recipename");
let servingSize = document.querySelector("li#servingsize");

fetch("http://localhost:3000/users")
  .then((r) => r.json())
  .then((userArray) => {
    //console.log(userArray);

    userArray.forEach((userObj) => {
      // userObj -> woody -> buzz
      let username = userObj.username;
      let userimage = document.createElement("img");
      userimage.id = username;
      userimage.src = userObj.profilepic;

      userimage.addEventListener("click", (event) => {
        recipelist.innerText = ""; // reset Previous Recipes
        //set recipeDiv to none
        userObj.recipes.forEach((recipeobj) => {
          let recipeli = document.createElement("li");

          recipeli.innerText = recipeobj.name;
          let editButton = document.createElement("button");
          editButton.innerText = "Edit";
          recipeli.append(editButton);
          //recipeDiv.style.display = "none";
          editButton.addEventListener("click", (event) => {
            console.log(event);
          });
          //console.log(recipeobj)

          //EVENTLISTENR TO RECIPE IN RECIPE LIST
          recipeli.addEventListener("click", (event) => {
            recipeCollection.style.display = "block";
            console.log(recipeobj);

            newRecipe(recipeobj);

            // recipeDiv.hidden = false;
          });
          recipelist.append(recipeli);
        });
      });
      userBox.append(userimage);
      // let recipeArray = userObj.recipes;
      // // Recipe Display Function
      // newRecipe(recipeArray[0]);
    });
  });

function loadUsers() {}

recipeDiv = document.querySelector("div#displaydiv");
//FUNCTION creates steps and ingredients LISTS
function newRecipe(recipe) {
  ingredientUl.innerText = "";
  stepsOl.innerText = "";
  let recipeName = recipe.name;

  recipeLabel.innerText = recipeName;

  let foodpic = document.querySelector("img#foodpic");
  foodpic.src = recipe.foodpic;

  servingSize.innerText = `Servings: ` + recipe.servings;

  let likeCount = document.querySelector("li#likecount");
  likeCount.innerText = `${recipe.likes} \u2665❤️✈️`; // cmd + ctr + space form imogi

  let ingredients = recipe.ingredients;

  ingredients.forEach((item) => {
    let newLi = document.createElement("li");
    newLi.innerText = item;
    ingredientUl.append(newLi);
  });

  let steps = recipe.steps;

  steps.forEach((item) => {
    let newLi = document.createElement("li");
    newLi.innerText = item;
    stepsOl.append(newLi);
  });
}

function loadIngredients() {}
//function newList () {
//   let newLi = document.createElement("li");
//   newLi.innerText = stepDescription.value;
//   //Delete Button
//   let deleteB = document.createElement("button");
//   deleteB.innerText = "Delete";
//   deleteB.type = "delete";
//   deleteB.class = "usrInput";
//   // creating an edit button
//   let editB = document.createElement("button");
//   editB.innerText = "Edit";
//   editB.type = "edit";
//   editB.class = "usrInputEdit";
//   // appending new elements to existing ones in the document.
//   newLi.append(editB);
//   newLi.append(deleteB);
//   list.append(newLi);

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
