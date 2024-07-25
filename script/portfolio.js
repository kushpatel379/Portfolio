// document.getElementById("linkedin-logo").addEventListener('click', function(e){
//     window.location.href = 'https://www.linkedin.com/in/kush-p-68730a153/';
// })

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

ham.addEventListener('click', () => {
    console.log('clicked');
    // if (parseInt(nav.style.left) <= 0) {
    //     console.log("if", parseInt(nav.style.left));
    //     // nav.style.left = '100%';
    //     nav.style.display = "block";
        
    // } else {
    //     console.log("else", parseInt(nav.style.left));
    //     // nav.style.left = '-100%';
    //     nav.style.display = "none";
    // }

    if (nav.style.display === "none" || nav.style.display === ""){
        nav.style.display = "block";
        console.log("hi")

        document.querySelector('.nav_list').addEventListener('click', () => {             //this event listener hides the navbar after choosing a section to go to 
            nav.style.display = "none";
        })

        // console.log("if")
        // var element = document.getElementById("hide");
        // element.classList.add("navbar_toggle");
        // element.style.display = "block"
        
    }else{
        nav.style.display = "none";
        console.log("hi2")

        document.querySelector('.nav_list').addEventListener('click', () => {            
            nav.style.display = "none";
        })

        // console.log("else")
        // var element = document.getElementById("hide");
        // element.classList.remove("navbar_toggle");
        // element.style.display = "none"


    }
});


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