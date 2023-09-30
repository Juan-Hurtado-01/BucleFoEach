const letras = ["a", "b", "c", "d", "e"];


const abc = function() {
  /* alert("Lista de estudiantes"); */
  document.open();

  for (let i = 0; i < letras.length; i++) {
    if (i == letras.length - 1) {
      document.write(letras[i] + " - ");
    } else {
      document.write(letras[i] + ", ");
    }
  }
  document.close();
}
