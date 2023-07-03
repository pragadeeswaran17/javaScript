// web storage

document.addEventListener(
    "readystatechange", (event)=>{
        if(event.target.readyState === "complete"){
            console.log("complete");
            initApp1();
            initApp2();
        };
    }
);

const initApp1 = () => {
    const myContent = ["Earn", "Grow", "give"];
    const myObject = {
        name : "praga",
        myContent : ["Earn", "Grow", "give"],
        logName : function () {
            console.log(this.name);
        }
    };
    
    window.sessionStorage.setItem("mySessionStore",JSON.stringify(myObject));

    const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
    console.log(mySessionData);

};

const initApp2 = () => {
    const myContent = ["Earn", "Grow", "give"];
    const myObject = {
        name : "praga",
        myContent : ["Earn", "Grow", "give"],
        logName : function () {
            console.log(this.name);
        }
    };
    
    window.localStorage.setItem("mySessionStore",JSON.stringify(myObject));
    const key = localStorage.key(0);
    const keyLength = localStorage.key.length;
//  const removeKey = localStorage.removeItem("mySesionStore");
//  const clearKey = localStorage.clear ;
    console.log(key);
    console.log(keyLength);
//  console.log(removeKey);


    const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
    console.log(mySessionData);

};
