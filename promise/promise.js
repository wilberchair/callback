async function pegaDados() {
  const resultado = await fetch('https://api.github.com/users/wilberchair')
  const resultadoConvertido = await resultado.json()
  console.log(resultadoConvertido);
}

pegaDados();