btn.addEventListener("click", () =>{
    let hours=document.getElementById("hours");
    let minutes=document.getElementById("minutes");
 

    let newHour=new Date().getHours();
    let newMinute=new Date().getMinutes();


    hours.innerHTML=newHour;
    minutes.innerHTML=newMinute;

})