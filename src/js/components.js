import "../css/components.css"
// import webpacklogo from "../assets/img/webpack-logo.png"

export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');

    h1.innerText = `Hola  ${ nombre }`;

    document.body.appendChild(h1);

    // console.log( webpacklogo );
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // img.alt = "Webpack Logo";
    // document.body.append(img);
}
