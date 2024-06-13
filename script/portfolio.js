document.getElementById("linkedin-logo").addEventListener('click', function(e){
    window.location.href = 'https://www.linkedin.com/in/kush-p-68730a153/';
})

document.getElementById("github-logo").addEventListener('click', function(e){
    window.location.href = 'https://github.com/kushpatel379';
})

// document.getElementById("about").scrollIntoView({behavior:"smooth"})
// document.getElementById("contact").scrollIntoView({behavior:"smooth"})

document.getElementById("contact").addEventListener("click", function(){
    this.scrollIntoView({behavior:"smooth"})
    console.log("hi")
})

// function contact_scroll(){
//     document.getElementById("contact").scrollIntoView(false)
//     console.log("hi")
// }