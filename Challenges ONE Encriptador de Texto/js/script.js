//Definición de variables
const llaves = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };
  const reversedLlaves = Object.fromEntries(
    Object.entries(llaves).map(([key, value]) => [value, key])
  );
  const texto = document.getElementById('texto');
  const encriptar = document.getElementById('encriptar');
  const desencriptar = document.getElementById('desencriptar');
  const textoInicial = document.getElementById('textoInicial');
  const textoProcesado = document.getElementById('textoProcesado');
  const mensajeEncriptado = document.getElementById('mensajeEncriptado');
  const copiarMensajeEncriptado = document.getElementById('copiarMensajeEncriptado');
  
  //Evento para permitir solo ingreso de letras minúsculas
  texto.addEventListener('input', (event) => {
    const text = event.target.value;
    const newText = text.toLowerCase().replace(/[^a-z\s 0-9]/g, '');
    event.target.value = newText;
  });
  
  //Encriptado texto ingresado
  encriptar.addEventListener('click', (event) => {
    event.preventDefault();
    mostrarTextoEncriptado(texto.value, encriptarTexto(texto.value, llaves));
  });
  
  //Desencriptado texto ingresado
  desencriptar.addEventListener('click', (event) => {
    event.preventDefault();
    mostrarTextoEncriptado(texto.value, encriptarTexto(texto.value, reversedLlaves));
  });
  
  //Copiar texto
  copiarMensajeEncriptado.addEventListener('click', (event) => {
    navigator.clipboard.writeText(mensajeEncriptado.innerHTML);
  });
  
  //Funciones
  function preRegExp(diccionario) {
    const preRegex = Object.keys(diccionario).join('|');
    return new RegExp(preRegex, 'g');
  };
  
  function encriptarTexto(texto, diccionario) {
    return texto.replace(preRegExp(diccionario), (match) => diccionario[match]);
  };
  
  function mostrarTextoEncriptado(texto, textoEncriptado) {
    if (texto != "") {
        if(textoProcesado.classList.contains('salida-texto-procesado')){
            textoProcesado.classList.toggle('salida-texto-procesado');
            textoInicial.classList.toggle('salida-texto-procesado');
        }
      mensajeEncriptado.innerHTML = textoEncriptado;
    }
  };
  