document.getElementsByClassName('burger')[0].addEventListener('click', function(){
    let  menu = document.getElementById("search-2")
    menu.classList.toggle("search-2-active")
    document.getElementsByClassName("line")[0].classList.toggle("line-1-active")
    document.getElementsByClassName("line")[1].classList.toggle("line-2-active")
    document.getElementsByClassName("line")[2].classList.toggle("line-3-active")
})

// function burger( ){ 
//     let  menu = document.getElementById("search-2")
//     menu.classList.toggle("search-2-active")
//     document.getElementsByClassName("line")[0].classList.toggle("line-1-active")
//     document.getElementsByClassName("line")[1].classList.toggle("line-2-active")
//     document.getElementsByClassName("line")[2].classList.toggle("line-3-active")
// }

let addbuttons = document.getElementsByClassName('addFood');
let bl = addbuttons.length;
console.log(bl);
for (let i = 0; i < bl; i++){
    addbuttons[i].addEventListener('click', function(){
    if (   this.innerHTML == ('დამატება')){
        this.innerHTML = ('დამატებულია')
        this.classList.add("addedFood") 
     } 
    else {
        this.textContent = 'დამატება';
        this.classList.remove("addedFood")  
    }
})
}
