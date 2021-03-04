let clr5= "#1e1f23";


let mode=document.querySelector("input[type=checkbox]");
mode.addEventListener("click",()=>{
    console.log(mode);
    if(mode.checked){
        console.log("truee");
        // $(".box .main .header .basic-info div span").css("color","#555555");
        $(".main").css("background-color","#fff");

    }
    else $(".main").css("background-color",clr5);
})
console.log();