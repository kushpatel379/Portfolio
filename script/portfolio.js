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


// function myFunction(){
//     var x = document.getElementById("hamburger");
//     if (x.className === "navlist"){
//         x.className += "responsive";
//     } else{
//         x.className = "navlist";
//     }
// }



// // document.getElementById("about").scrollIntoView({behavior:"smooth"})
// // document.getElementById("contact").scrollIntoView({behavior:"smooth"})

// document.getElementById("contact").addEventListener("click", function(){
//     this.scrollIntoView({behavior:"smooth"})
//     console.log("hi")
// })

// // function contact_scroll(){
// //     document.getElementById("contact").scrollIntoView(false)
// //     console.log("hi")
// // }