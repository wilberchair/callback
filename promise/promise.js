async function pegaDados() {
  const resultadoConvertido = await fetch('https://api.github.com/users/wilberchair')
    .then(res => res.json())
  console.log(resultadoConvertido);

  const body = document.querySelector('body')
  const getImg = resultadoConvertido.avatar_url
  const img = document.createElement('img');
  body.insertAdjacentElement('beforeend', img);
  img.setAttribute('src', getImg);
}

pegaDados();