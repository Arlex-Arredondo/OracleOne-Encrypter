
const btnEncrypt = document.querySelector('.btn-encrypt');
const btnDecrypt = document.querySelector("btn-decrypt");
const btnCopy = document.querySelector("btn-copy");
const btnCopy2 = document.querySelector("btn-copy2");
const txtArea = document.getElementById("main-text");

txtArea.addEventListener("keydown", checkLetterOnkeyPressed);
btnEncrypt.addEventListener('click', encrypt);
btnDecrypt.addEventListener("click", decrypt);
btnCopy.addEventListener("click", copy);
btnCopy2.addEventListener("click", copy);
    

function encrypt(){
    txtArea.value="asdasd888";
}

function decrypt(){

}

function copy(){

}

function checkLetterOnkeyPressed(e){
    // Get the pressed key
    const key = e.key;

    // Check if the pressed key is a lowercase alphabetic character
    if (!/[a-z]/.test(key) && !e.ctrlKey && !e.altKey && key !== 'Backspace') {
        // Prevent the default action (typing) if the key is not a lowercase alphabetic character
        e.preventDefault();
    }
}