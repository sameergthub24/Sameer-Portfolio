
// Typewriter Effect
const texts = [
    "DEVELOPER",
    "DESIGNER",
]
let speed  =100;
// selector
const textElements = document.querySelector(".typewriter-text");
// track the text
let textIndex = 0;
// track the character
let characterIndex = 0;

// The function checks if there are still characters left to type
function typeWriter(){
    if (characterIndex < texts[textIndex].length){
      // If there are, it adds one character from the current string
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
      //  it increments the charcterIndex and calls typeWriter() again after a delay
        characterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
// The eraseText function progressively removes the last character of the current text by slicing off the last character (slice(0, -1)) and then calls itself every 50 milliseconds until the text is fully erased.
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
      //Once the text is completely erased, it switches to the next word in the texts array using 
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
//  the page loads, the typeWriter() function is triggered to start the effect.
window.onload = typeWriter