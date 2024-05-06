let submitBtn = document.getElementById("btn")

function submit(){
    Container();
    tytle();
    box()
    parargraph();
    img();
    display();
    outSubmit ();
    buttons();
  

}

function Container(){
    let contain =document.getElementById("container")
    contain.style.height ="65%"
 }
 function tytle(){
     let tstyle = document.getElementById("Txt");
  tstyle.innerText="Thanks you!"
  tstyle.style.textAlign="center";
  tstyle.style.margin=0;

  
 }

 function box(){
   let boc= document.querySelector(".box").style.display="block"
  let txt=document.querySelector(".box h4").style.padding="6px"
 
  
 }
function parargraph (){
    let para = document.getElementById("para")
    para.innerText ="We appreciate you to taking the time to give rating if you ever need more support,don't hasitate to get in touch";
   para.style.textAlign ="center" 
}

 function img (){
    let img = document.getElementById("imag")
    img.style.display ="block"
    
    
 }
 function display (){
    let noimg = document.getElementById("star")
    noimg.style.display="none";
  let pic= document.querySelector(".pic");
  pic.style.border="none";
  pic.style.display="none"
 }

 function outSubmit (){
    let nosub = document.getElementById("btn")
    nosub.style.display="none";
 }

 function buttons(){

    let btn = document.querySelectorAll('#buton')
    btn[0].style.display="none";
    btn[1].style.display="none";
    btn[2].style.display="none";
    btn[3].style.display="none";
    btn[4].style.display="none";
 }


//  adding 



 

submitBtn.addEventListener("click",submit)

// Get references to the buttons and the display element
const butons = document.querySelectorAll('#buton');
const trackedButtonDisplay = document.getElementById('text');

// Add click event listeners to the buttons
butons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove 'selected' class from all buttons
    butons.forEach(btn => {
      btn.classList.remove('selected');
    });

    // Add 'selected' class to the clicked button
    this.classList.add('selected');

    // Display the tracked button
    trackedButtonDisplay.textContent = `You Selected ${this.textContent} out of 5`;

    // Execute tracking code for the clicked button
    trackButtonClick(this.textContent);
  });
});

// Function to track button clicks
function trackButtonClick(buttonName) {
  // Here, you can send tracking data to your analytics service
  console.log('Button clicked:', buttonName);
  // Example: Send tracking data to Google Analytics or any other analytics service
}
