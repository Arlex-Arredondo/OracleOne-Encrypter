
const btnEncrypt = document.querySelector(".btn-encrypt");
const btnDecrypt = document.querySelector(".btn-decrypt");
const btnCopy = document.querySelector(".btn-copy");
const btnCopy2 = document.querySelector(".btn-copy2");
const txtArea = document.getElementById("main-text");
const pText = document.getElementById("myP");

txtArea.addEventListener("keydown", checkLetterOnkeyPressed);
btnEncrypt.addEventListener('click', encrypt);
btnDecrypt.addEventListener("click", decrypt);
btnCopy.addEventListener("click", copy);
btnCopy2.addEventListener("click", copy);


function encrypt(){
    let textToEncrypt = txtArea.value;
    textToEncrypt = textToEncrypt.replaceAll("e","enter");  
    textToEncrypt = textToEncrypt.replaceAll("i","imes"); 
    textToEncrypt = textToEncrypt.replaceAll("a","ai");
    textToEncrypt = textToEncrypt.replaceAll("o","ober");
    textToEncrypt = textToEncrypt.replaceAll("u","ufat");
    
    pText.textContent = textToEncrypt;
    pText.setAttribute('data-state', 'active');
}

function decrypt(){
    let textToDecrypt = txtArea.value;
    textToDecrypt = textToDecrypt.replaceAll("ai","a");
    textToDecrypt = textToDecrypt.replaceAll("ober","o");
    textToDecrypt = textToDecrypt.replaceAll("ufat","u");
    textToDecrypt = textToDecrypt.replaceAll("enter","e");  
    textToDecrypt = textToDecrypt.replaceAll("imes","i"); 
    
    console.log(textToDecrypt);
    
    pText.textContent = textToDecrypt;        
    pText.setAttribute('data-state', 'active');
}

function copy(e){
    const clickedButton = e.target;

    if(clickedButton.classList.contains('btn-copy')){
        txtArea.select();
        document.execCommand('copy');
        txtArea.setSelectionRange(0, 0);
    }else{
        let text = pText.innerHTML;
        navigator.clipboard.writeText( text );
    }
}

function checkLetterOnkeyPressed(e){
    const key = e.key;

    if (!/[a-z ]/.test(key) && !e.ctrlKey && !e.altKey && key !== 'Backspace') {
        e.preventDefault();
    }
}
 

//
