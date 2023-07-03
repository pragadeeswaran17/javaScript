// Event handling

const view = document.querySelector("#view2");
//console.log(view);

const div = view.querySelector("div");

const h2 = div.querySelector("h2");

//syntax
//addEventListeners(event, Function, useCapture)


/*
const doSomthing = () => {
    alert("doing somthing");
};

h2.addEventListener("click", doSomthing, false);

h2.removeEventListener("click", doSomthing, false);
h2.addEventListener("click" , (event)=>{console.log(event.target);});

h2.addEventListener("click" , (event)=>{console.log(event.target.textContant = "praga");});


h2.addEventListener("click" , function(event){console.log(event.target);
console.log(event.target.textContant ="praga")});

*/


document.addEventListener(
    "readystatechange", (event)=>{
        if(event.target.readyState === "complete"){
            console.log("complete");
            initApp();
        };
    }
);



//BUBBLING  UP

/*
const initApp = ()=>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event)=>{
        view.style.backgroundColor = "yellow";

    })

    div.addEventListener("click", (event)=>{
        div.style.backgroundColor = "purple";
        
    })

    h2.addEventListener("click", (event)=>{
        event.target.textContent = "hola" ;
        
    })
    
};
*/



/*
const initApp = ()=>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event)=>{
        view.style.backgroundColor = "yellow";

    })

    div.addEventListener("click", (event)=>{

        div.style.backgroundColor = "purple";
        
    })

    h2.addEventListener("click", (event)=>{
        event.stopPropagation();
        event.target.textContent = "hola" ;
        
    })
    
}

*/



////BUBBLING  DOWN


/*
const initApp = ()=>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event)=>{
       
        view.style.backgroundColor = "yellow";

    },true)

    div.addEventListener("click", (event)=>{

        div.style.backgroundColor = "purple";
        
    },true)

    h2.addEventListener("click", (event)=>{
        event.target.textContent = "hola" ;
        
    },true)
    
};

*/


/*
const initApp = ()=>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event)=>{
       
        view.style.backgroundColor = "yellow";

    },true)

    div.addEventListener("click", (event)=>{
        event.stopPropagation();
        div.style.backgroundColor = "purple";
        
    },true)

    h2.addEventListener("click", (event)=>{
        event.target.textContent = "hola" ;
        
    },true)
    
};
*/



/*
const initApp = ()=>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event)=>{
       
        event.target.style.backgroundColor = "yellow";

    })

    div.addEventListener("click", (event)=>{
        
        event.target.style.backgroundColor = "purple";
        
    })

    h2.addEventListener("click", (event)=>{
        event.target.textContent = "hola" ;
        
    })
    
};
*/


/*
const initApp = ()=>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event)=>{
       
        view.classList.add("yellow");
        view.classList.remove("darkBlue");

    })

    div.addEventListener("click", (event)=>{
        
        event.target.style.backgroundColor = "purple";
        
    })

    h2.addEventListener("click", (event)=>{
        event.target.textContent = "hola" ;
        
    })
    
};
*/


// toogle   !!!!!!!!


const initApp = ()=>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event)=>{
       
        view.classList.toggle("yellow");
        view.classList.toggle("darkBlue");

    })

    div.addEventListener("click", (event)=>{
        
        div.classList.toggle("purple");
        div.classList.toggle("black");
        
    })

    h2.addEventListener("click", (event)=>{

        const myTxt = event.target.textContent;

        myTxt === "hello" ? (event.target.textContent = "hola") :
        (event.target.textContent = "hello");


        
        
    })
    
};











