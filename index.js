

// ADDED Contains all recipe items
let userBox = document.querySelector("ul#userlist")
let recipelist = document.querySelector("ul#recipes")
let recipeDiv = document.querySelector("div#displaydiv");
let stepsOl = document.querySelector("ol#steps");
//let likes;
let userId;
let newtitle;
let newdirections = [];
let userObj = {}; // Object in memory to be updated
let recipenumid;



let userInput = document.querySelector("form#userlogin")// form
let userName = document.querySelector("input.userid") // txtbox

// Event Listener for User Login

// 1.)
let recipedisplaytogglediv = document.querySelector("div#recipeDisplay")
userInput.addEventListener('submit', (e)=> {
  recipeCollectiondiv.style.display = 'none'
  e.preventDefault()
  recipedisplaytogglediv.style.display = "block"
  let username  = userName.value
  login(username)
})


// Function login
function login(username) {

  return fetch(`http://localhost:3000/users?_embed=recipes&username=${username}`)
    .then((r) => r.json())
    .then((userObj) => {
      if (userObj.length > 0) {
        userObj = userObj[0]
        userId = userObj.id   // This saves the id of the user
       console.log(userObj)
      showUserInformation(userObj)  // This calls the user information/recipe function
      }

    });
}

// After Loging in to a User
// USER INFO AND RECIPES
//2.)
function showUserInformation(userObj) {
  
    let userimage = document.createElement("img")
    userBox.innerText = "" // Reset user images
    recipelist.innerText = ""  //reset Previous Recipe
    stepsOl.innerText = "" // reset list of directions
    newtitle = ''; // recent the title
    newdescription = ''; //recent the array of stored directions
    userimage.src = userObj.profilepic;
    userBox.append(userimage)
    recipelister(userObj)
    
}

// Create List of Existing Recipes 
let recipeCollectiondiv = document.querySelector("div#RecipeCollection")
let recipelistbox = document.querySelector("div#prerecipelist")
function recipelister (userOb){ 
  userObj = userOb
  userOb.recipes.forEach((recipeobj)=> {     //for each recipe stored in userObj
   

    let recipeli = document.createElement('li')
    recipeli.innerText = recipeobj.name
    recipelist.append(recipeli)

      recipeli.addEventListener("click", (event) => {  // Event listener for each listed recipe
        newRecipe(recipeobj);
        recipenumid = recipeobj.id
        console.log(recipenumid)
        recipeCollectiondiv.style.display = "block"
        recipenum = false
      })
  })
  
}

//3.)

//This function shows all recipe information after a user clicks on a recipe
function newRecipe(recipe) {
// New food picture
  stepsOl.innerText = ""
  newtitle = recipe.name
  let foodpic = document.querySelector("img#foodpic");
  foodpic.src = "https://www.healthygffamily.com/wp-content/uploads/2018/11/595A0FC4-3815-40A7-A70C-FAFB3EBC4174.jpg"
  // New Recipe Title
  let recipeLabel = document.querySelector("h2#recipename");
  recipeLabel.innerText = recipe.name;
  // List Steps in recipe
  let steps = recipe.steps;
  steps.forEach((item) => {
   
    newList(stepsOl,item,editstepinput)
  })
   //edited past here
   // Allow user to edit the recipe name
   let userInput = document.querySelector("form#userInput");  
   let edittext = document.querySelector("input#editText");
    userInput.addEventListener('click', (e)=> {
    e.preventDefault()
    recipeLabel.innerText = edittext.value
    newtitle = edittext.value
  })
}
//4.)
  // Allow user to input new directions
  let editstepinput = document.querySelector("input#editStep")
  let editstepsform = document.querySelector("form#directioneditor")
   editstepsform.addEventListener('submit', (e)=> {
    e.preventDefault();
    let item = editstepinput.value
    newList(stepsOl,item,editstepinput)
   })



// Allow user to change likes on a food
  // let likeCount = document.querySelector("a#likecount");

  // Edit from 151-165
  // likeCount.innerText = ""
  // let heartGlyph = document.createElement("button");
  // let downVote = document.createElement("button");
  // let likesnum = document.createElement('li')
  // cmd + ctr + space form imogi //EDITED

//   heartGlyph.innerText = '❤️';
//   downVote.innerText = '👎';
//   likes = recipe.likes
//   likesnum.innerText = likes
//   likeCount.append( heartGlyph, downVote, likesnum)
//   likeCount.addEventListener('click', (e)=>{ //added
//     e.preventDefault
//   if (e.target == heartGlyph){
//       console.log('Likes')
//       likes += 1
//       likesnum.innerText = likes
//   }
//  else {
//       likes -=1
//       likesnum.innerText = likes
//  }
//  editrecipe (title, likes, steps)
//     })

    
  
// Edit from 151-165

// Creates li and button elements for each recipe direction
function newList(list, item, input) {

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

newLi.addEventListener("click", (e) => {
  e.preventDefault()

  let indx = e.target.closest('li');
  if (!indx) return;
  if (e.target.matches("button[type=delete]")){   //delete button
    indx.remove();
  }
  else if(e.target.matches("button[type=edit]")) { //edit button
    //console.log(indx.childNodes[0].textContent)
    console.log(indx)
    indx.childNodes[0].textContent = input.value
   
  }
  });
}

//Edited from 238 down

// New Recipe Display toggle
let recipenum = false;
let newrecipebutton = document.querySelector('button#submitNewRecipe')
let newrecipedisplay = document.querySelector('div#createnewrecipe')


newrecipebutton.addEventListener('click', (e)=> {

    e.preventDefault()
    recipenum = !recipenum
    if (recipenum == true) {
    newrecipedisplay.style.display = 'block'
    recipeCollectiondiv.style.display = "none"
    
    }
    else{
      
      newrecipedisplay.style.display = 'none'
    }
})
//New Recipe Title

let newRecipeSubmit = document.querySelector('form#newrecipe')
let newRecipeName = document.querySelector('input.newrecipe')
let newRecipeTitle = document.querySelector('h2#newrecipename')
  
  newRecipeSubmit.addEventListener('submit', (e)=> {
    e.preventDefault()
    newRecipeTitle.innerText = newRecipeName.value
    newtitle = newRecipeName.value
  })
    
  


// NEW Directions
let newRecipedirectionsOl = document.querySelector('ol#newdirectionrecipe')
let newRecipedstepsform = document.querySelector('form#steps')
let newRecipeDirectioninput = document.querySelector('input#newstep')
newRecipedstepsform.addEventListener('submit', (e)=>{
  e.preventDefault()
  
let item = newRecipeDirectioninput.value
  newList(newRecipedirectionsOl, item, newRecipeDirectioninput)

})

//delete recipe button
let newrecipedeleteButton = document.querySelector('button#deleteRecipe')
newrecipedeleteButton.addEventListener('click', (e)=> {
  e.preventDefault()
deleterecipe()
})

// Delete Function
let deleterecipeButton = document.querySelector("button#deleteRecipe")
function deleterecipe () {
  return fetch(`http://localhost:3000/recipes/${recipenumid}`,{
    method: "DELETE",
    })
    .then(res => res.json)
    .then( () => { 
  //update object in memory
  let len = recipelist.childNodes.length - 1

  userObj.recipes.splice(len, 1)
  //update DOM
  recipeCollectiondiv.style.display = "none"
  recipelist.innerText = ""
  recipelister(userObj)
    })
}

//Editing a recipe
let savebutton = document.querySelector("button#saveChanges")
savebutton.addEventListener("click", (e)=> {
    e.preventDefault()
  
 if (recipenum == false) { 
        newdirections = []
        stepsOl.childNodes.forEach(step => {
        let direction = step.innerText.replace("EditDelete", "")
        newdirections.push(direction)
        })
        recipeCollectiondiv.style.display = 'none'
        editrecipe(newtitle, newdirections)
    }
  else if (recipenum == true)
  {
    newdirections = []
    newRecipedirectionsOl.childNodes.forEach(step => {
      let direction = step.innerText.replace("EditDelete", "")
      newdirections.push(direction)
      console.log(newdirections)
      })
      newRecipeTitle.innerText = ""
      newRecipedirectionsOl.innerText = ""
      newRecipeTitle.innerText = ""
      recipenum = false
      newrecipedisplay.style.display = 'none'
      postrecipe(newtitle, newdirections)


    }
})

// Edit Function
function editrecipe (newtitle,newdirection) {
console.log(newtitle, newdirection)
  return fetch(`http://localhost:3000/recipes/${recipenumid}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
    name: newtitle,
    steps: newdirection
    }),
    })
.then(res => res.json())
.then(res => {
  //update object in memory
 console.log(res)
 
 let len = recipelist.childNodes.length - 1
  
  userObj.recipes[len] = {... res}
  //update DOM
  recipelist.innerText = ""
  
  recipelister(userObj)
})
  }


// POST for adding a new recipe
function postrecipe(newtitle, newdirection) {

return fetch(`http://localhost:3000/recipes/`,{
method: "POST",
headers: {
  "Content-Type": "application/json"
},
body: JSON.stringify({
userId: userId,
name: newtitle,
steps: newdirection
})
})
.then(res => res.json())
.then(res => {
  //update object in memory
  console.log(res)
  userObj.recipes.push(res)  
  //update DOM
  recipelist.innerText = ""  //reset Previous Recipe
  recipelister(userObj)
})

}



