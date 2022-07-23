const palavra = ["abacaxi"];

const letrasChutadas = [];
const letrasCorretas = [];

document.addEventListener("keydown", (evento) => {
  const codigo = evento.keyCode;
  if(isLetra(codigo))  {
    const letra = evento.key;
    if(letrasChutadas.includes(letra)){
        

    } else {
        if(palavra.includes(letra)) {
          letrasCorretas.push(letra);
        } else{
          letrasChutadas.push(letra);

        }
    }
  }
})

function atualizarJogo(){
  mostrarLetrasCorretas();
  mostrarLetasChutadas();

}

function mostrarLetasChutadas()
  if(mostrarLetasChutadas.length > 0);


const vidas = [6];

  function vidas(){
    for(var i=0; i<vidas.length; i++){
      if(vidas[i]){
        return ("perdeu");
      }else{
        return ("ganhou");
      }
      }
    }
  


function mostrarLetrasCorretas(){
  palavra.split("").array.forEach(element => {
    if(letrasCorretas.includes(palavra)){
      palavra => letrasCorretas.push(palavra);
    }else{
      palavra => letrasChutadas.push(palavra);
    }
  });
}



 function isLetra (codigo) {
  return codigo >= 65 && codigo <= 90;


 }


class Forca {

  chutar(letra) { }

  buscarEstado() { return "aguardando chute"; } 
  buscarDadosDoJogo() {
      return {
          letrasChutadas: [letrasChutadas],
          vidas: 6 [vidas],
          palavra: [letrasCorretas] 
      }
  }
}

module.exports = Forca;
