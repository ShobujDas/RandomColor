const getColor = ()=>{
   const red = Math.floor(Math.random() * 256);
   const green = Math.floor(Math.random() * 256);
   const blue = Math.floor(Math.random() * 256);
  
   const rgb = "rgb"+"("+red +","+green + ","+ blue+ ")";
   document.getElementById("color-code").innerHTML = rgb;
   
   document.getElementById("box").style.backgroundColor = rgb;

   const random = Math.floor(Math.random() * 12554225);
   const randomColor = "#"+random.toString(16);
   document.getElementById("hax-code").innerHTML = randomColor;
   document.body.style.backgroundColor = randomColor;
   console.log(random,randomColor);

   // navigator.clipboard.writeText(randomColor);
   
}
getColor();

document.getElementById("btn").addEventListener(
   "click",
   getColor
);

