// Dom DocumentObjectt Model

const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const samedivs = view1.getElementsByTagName("div");
console.log(samedivs);


const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)")
console.log(evenDivs);

evenDivs[3].style.backgroundColor = "purple";

for(i = 0; i< evenDivs.length; i++){
    evenDivs[i].style.backgroundColor = "purple"
    evenDivs[i].style.width = "150px"
};


const navText = document.querySelector("nav h1");
console.log(navText);

navText.textContent = "hello world"


const navBar = document.querySelector("nav");

navBar.innerHTML = "<h1> my friend </h> <P> welcome to my world</p>";

navBar.style.justifyContent = "flex-end"

console.log(navBar);

console.log(evenDivs);
console.log(evenDivs[0]);
console.log(evenDivs[3]);

console.log(evenDivs[0].parentElement);

console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);

console.log(evenDivs[0].parentElement.hasChildNodes());

console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);

console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);

console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].nextElementSibling);

console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);


view1.style.display = "none";

view2.style.display = "flex";

view2.style.flexDirection = "row";

view2.style.flexWrap = "wrap";

view2.style.margi = "10px";

console.log(view2.lastElementChild);

while (view2.lastElementChild) {
    view2.lastElementChild.remove();
};

/*
const newDiv = document.createElement("div");

view2.append(newDiv);

newDiv.textContent = "hi";

newDiv.style.width = "100px";
newDiv.style.height = "100px"
newDiv.style.background = "red";
newDiv.style.display = "flex"
newDiv.style.justifyContent = "center"
newDiv.style.alignItems = "center"
*/



//function

const createDiv = (parent, iter)=>{
    
   const newDiv = document.createElement("div");
   newDiv.textContent = iter ;
   newDiv.style.width = "100px";
   newDiv.style.height = "100px"
   newDiv.style.background = "red";
   newDiv.style.display = "flex"
   newDiv.style.justifyContent = "center"
   newDiv.style.alignItems = "center"
   newDiv.style.margin = "5px"
   parent.append(newDiv)
}

//createDiv(view2, "hello")

for(i = 1; i<=10;i++){
    createDiv(view2, i)

};

//newDiv.innerHTML = "<h1> hello </h1>"







