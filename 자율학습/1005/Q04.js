import "babel-polyfill";

const text = document.getElementById("text");

//2. 위 코드를 async로 비동기 처리한 후 document.write()를 사용해서 포켓몬의 이름(data.species.name)을 웹에 띄우세요.
const fetchPokemon = async (id) => {
  //이때 에러가 발생했을 경우를 대비해 try{} catch(err){} 블록을 사용하거나 .then() 과 .catch()블록을 사용하세요.
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  console.log(data.species.name);
  console.log(data);

  document.write(data.species.name + "n");
  const name = data.species.name;

  let output = "";

  output = output + `<li>${name}</li> `;

  document.body.innerHTML = output;
};

fetchPokemon(2);
