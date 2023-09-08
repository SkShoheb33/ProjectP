const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");

explore = () =>{
    a.style.display = "none"
    b.style.display = "none"
    c.style.display = "block"
}

viewMore = ()=>{
    explore();
    c.style.display = "none"
    d.style.display = "block"
}