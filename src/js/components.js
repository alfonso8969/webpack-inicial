import "../css/components.css"

const saludar = (nombre) => {
    const h1 = document.createElement('h1');
    h1.innerText = `Hola  ${ nombre }`;
    h1.id = 'h1';
    document.body.appendChild(h1);
    
    const button = document.createElement('button');
    button.innerText  ="Refresh";
    button.id  = "btnRefresh";
    document.body.appendChild(button);
    button.addEventListener('click', () => {
        clearScreen();
        askName();
    })
}

export const askName = () => {
    const name = prompt("Cual es tu nombre?");
    switch (name) {
        case "":
            failInName();
            break;
        case name:
            saludar(name);
            break;
        default :
            failInName();
    }
}

const failInName = () => {
    alert('Error, debe introducir un nombre');
    askName();
}

const clearScreen = () => {
    document.body.removeChild(document.querySelector('#h1'));
    document.body.removeChild(document.querySelector('#btnRefresh'));
    

}
