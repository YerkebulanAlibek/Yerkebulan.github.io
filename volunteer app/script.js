let body = document.querySelector("body");
let observer = new IntersectionObserver(enteries => {
    enteries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateX(0)";
        }
    })
})
observer.observe(body)

  
