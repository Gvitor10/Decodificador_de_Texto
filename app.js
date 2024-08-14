// Salvando a ultima mensagem criptografada do usuário
let lastMessage = "";

// Capturando o texto do usuário
function getPrompt() {
    let input = document.getElementById("input");
    let text = input.value;
    input.value = "";

    return text;
};

// Criptografando a mensagem
function encrypt() {
    text = getPrompt().replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai")
    .replaceAll("o", "ober").replaceAll("u", "ufat");

    lastMessage = text;

    showMessage(text);
};

// Mostrando o resultado
function showMessage(text) {
    let messageDisplay = document.getElementById("message_display");

    messageDisplay.innerHTML = `
    <div id="display_message">
        <span id="textMessage">${text}</span>
        
        <div id="btn_copy" onclick="copyText()">Copiar</div>
    </div>
    `;
    
    console.log(messageDisplay);
};

// Descriptografando a menssagem
function decrypt() {
    text = getPrompt().replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a")
    .replaceAll("ober", "o").replaceAll("ufat", "u");

    lastMessage = text;
    
    showMessage(text);
};

// Funçao para copiar o texto do display
function copyText() {
    navigator.clipboard.writeText(lastMessage).then(() => {
        alert("Texto copiado com sucesso para a área de transferência.")
    });
};