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
    }else{
        nav.style.display = "none";
        console.log("hi2")

        document.querySelector('.nav_list').addEventListener('click', () => {            
            nav.style.display = "none";
        })


    }
});