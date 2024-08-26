document.getElementById("github-logo").addEventListener('click', function(e){
    window.location.href = 'https://github.com/kushpatel379';
    console.log("hi")
})

function myFunction() {
    var hamburger = document.getElementById("navList");
    if (hamburger.style.display === "nav_list") {
        hamburger.style.display = "responsive";
    } else {
        hamburger.style.display = "nav_list";
    }
}
const ham = document.querySelector('.icon2');  // Assuming 'ham' is a class of the element
const nav = document.querySelector('.navbar');  // Assuming 'nav' is a class of the element
// const disapear = document.querySelector(body)

ham.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('clicked');              //this prevents the body's click from overriding
    

    if (nav.style.display === "none" || nav.style.display === ""){
        nav.style.display = "block";
        console.log("hi")

        document.querySelector('.nav_list').addEventListener('click', (event) => {             //this event listener hides the navbar after choosing a section to go to 
            event.stopPropagation();
            nav.style.display = "none";
        })
       
    }else{
        nav.style.display = "none";
        console.log("hi2")

        document.querySelector('.nav_list').addEventListener('click', (event) => {     
            event.stopPropagation();       
            nav.style.display = "none";
        })
    }
});

document.body.addEventListener('click', () => {
    console.log("Body was clicked")
    if (nav.style.display === "block"){
        nav.style.display = "none"
        console.log("in body")
    }
})

const scroll_exp  = document.getElementById("experience_container")



//for 768 pixels
var x_MID = window.matchMedia("(min-width: 480px) and (max-width: 768px)")

myFunctionMid(x_MID);

x_MID.addEventListener("change", function(){
    myFunctionMid(x_MID);
    console.log("between 480 and 768")
})

function myFunctionMid(x_MID){
    if(x_MID.matches){
        var element = document.getElementById("hide");
        if(element.style.display = "none"){
            console.log("CHANGE")
            var element = document.getElementById("hide");
            element.style.display = "block"
            element.style.removeProperty("display");
        }
    } 
}

// for 1024 pixels
/*var x_large = window.matchMedia("(max-width:1024px)")

myFunctionLarge(x_large);

x_large.addEventListener("change", function(){
    myFunctionLarge(x_large);
    console.log("1024")
})

function myFunctionLarge(x_large){
    if(x_large.matches){
        var element = document.getElementById("hide");
        if(element.style.display = "none"){
            console.log("CHANGE")
            var element = document.getElementById("hide");
            element.style.display = "block"
        }
    } 
}*/


// for 480px
var x_small = window.matchMedia("(max-width: 480px)")

myFunction_small(x_small);

x_small.addEventListener("change", function(){
    myFunction_small(x_small);
    console.log("480")
})

function myFunction_small(x_small){
    if(x_small.matches){
        var element = document.getElementById("hide");
        element.style.display = "none"
    } 
}