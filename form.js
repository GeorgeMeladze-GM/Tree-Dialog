let Title = document.querySelector("#Title")
let Desc = document.querySelector("#Description")
let formDate = document.querySelector("#Date")
let Skills = document.querySelector("#Skills")
let Img = document.querySelector("#Browse")
let Submit = document.querySelector("#Submit")




Submit.addEventListener("click", (e) => {
    e.preventDefault();
    let formObj = {
        title: Title.value,
        description: Desc.value,
        date: formDate.value,
        skills: Skills.value,
        image: Img.value
    }
    let formJson = JSON.stringify(formObj);

    Title.value = ""
    Desc.value = ""
    formDate.value = ""
    Skills.value = ""
    Img.value = ""
    

    console.log(formObj);
    console.log(formJson);
})

let hint1 = document.querySelector("#hint1")
let hint2 = document.querySelector("#hint2")
let hint3 = document.querySelector("#hint3")
let hint4 = document.querySelector("#hint4")


// Title.addEventListener("click", (e) => {
//     e.preventDefault();
//     hint1.classList.remove("hide")
//     hint2.classList.add("hide")
//     hint3.classList.add("hide")
//     hint4.classList.add("hide")
// })

// Desc.addEventListener("click", (e) => {
//     e.preventDefault();
//     hint1.classList.add("hide")
//     hint2.classList.remove("hide")
//     hint3.classList.add("hide")
//     hint4.classList.add("hide")
// })

// formDate.addEventListener("click", (e) => {
//     e.preventDefault();
//     hint1.classList.add("hide")
//     hint2.classList.add("hide")
//     hint3.classList.remove("hide")
//     hint4.classList.add("hide")
// })

// Skills.addEventListener("click", (e) => {
//     e.preventDefault();
//     hint1.classList.add("hide")
//     hint2.classList.add("hide")
//     hint3.classList.add("hide")
//     hint4.classList.remove("hide")
// })


let Switch = document.querySelector(".slider")
let ClickCounter = 0;
Switch.addEventListener("click", () =>{
    ClickCounter++;
    if(ClickCounter % 2 == 1) {
        hint1.style.display = "block"
        
        Title.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "block"
            hint2.style.display = "none"
            hint3.style.display = "none"
            hint4.style.display = "none"
        })
        
        Desc.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "none"
            hint2.style.display = "block"
            hint3.style.display = "none"
            hint4.style.display = "none"
        })
        
        formDate.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "none"
            hint2.style.display = "none"
            hint3.style.display = "block"
            hint4.style.display = "none"
        })
        
        Skills.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "none"
            hint2.style.display = "none"
            hint3.style.display = "none"
            hint4.style.display = "block"
        })
        
        console.log("111");

    } else {
        hint1.style.display = "none"
        hint2.style.display = "none"
        hint3.style.display = "none"
        hint4.style.display = "none"
        Title.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "none"
            hint2.style.display = "none"
            hint3.style.display = "none"
            hint4.style.display = "none"
        })
        
        Desc.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "none"
            hint2.style.display = "none"
            hint3.style.display = "none"
            hint4.style.display = "none"
        })
        
        formDate.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "none"
            hint2.style.display = "none"
            hint3.style.display = "none"
            hint4.style.display = "none"
        })
        
        Skills.addEventListener("click", (e) => {
            e.preventDefault();
            hint1.style.display = "none"
            hint2.style.display = "none"
            hint3.style.display = "none"
            hint4.style.display = "none"
        })
        console.log("222");
    }
    
})