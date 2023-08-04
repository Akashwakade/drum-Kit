let buttons = document.querySelectorAll('.drum')

// we can run a loop inside the buttons array and add an event to each button.

buttons.forEach(function(el){
    // we are catching each element and adding an event to it. 
    el.addEventListener('click',function(){
        // we are calling the playSound function to play the sound
        // this function should have an input to know which button is clicked.
        // we are getting the input of which button is clicked using el.textContent.
        console.log(el.textContent)
        playSound(el.textContent);
    })
})

// we are creating a function to play sounds.

function playSound(input){
    // switch case can be used to decide which sound should be played based on input
    // syntax 
    // switch(condition){
    //     condition1: code
    //     break;
    //     condition2: code
    //     break;
    //     ...
    // }
    switch(input){
        case 'w':
            // in every case, we do the same thing, play a sound
            // to create a new sound we use "new Audio". The syntax is 
            // new Audio('source')
            let wSound = new Audio('./sounds/tom-1.mp3')
            // we created the sound, we need to play it. 
            // to play a sound we use play() method
            // syntax is soundName.play();
            wSound.play();
            // we break the condition now
            // try to remove the break and see what happens
            break;
        case 'a':
            let aSound = new Audio('./sounds/tom-2.mp3')
            aSound.play();
            break;
        case 's':
            let sSound = new Audio('./sounds/tom-3.mp3')  
            sSound.play();
            break; 
            case 'd':
                let dSound = new Audio('./sounds/tom-4.mp3')  
                dSound.play();
                break; 
                case 'j':
                    let jSound = new Audio('./sounds/snare.mp3')  
                    jSound.play();
                    break; 
                    case 'k':
                        let kSound = new Audio('./sounds/crash.mp3')  
                        kSound.play();
                        break; 
                        case 'l':
                            let lSound = new Audio('./sounds/kick-bass.mp3')  
                            lSound.play();
                            break; 
        // finish the code.

        default:
            console.log(input);
            break;
    }
}

// keydown event is used to catch keys pressed on keyboard.

document.addEventListener('keydown',function(event){
    // we are able to know which key is pressed on the keyboard with event.kay
    // event is an inbuilt js object which gets created when we use addEventListener.
    console.log(event);
    console.log(event.key);
    // we are passing event.key to the playSound() func.
    playSound(event.key);

})
