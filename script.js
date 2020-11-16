//My api key
var apiKey = {
  key: "091f480c-5dd3-4e53-a49b-2a611fad3fd8",
};

//My array data coin
const data = [];

//GET Fetch Requisition
fetch(
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" +
    apiKey.key
)
  .then((response) => {
    if (!response.ok)
      throw new Error(
        "Erro ao executar a requisição, status " + response.status
      );
    return response.json();
  })
  .then((api) => {
    // Get 20 coins and symbols
    for (let i = 0; i < 20; i++) {
      //Show API information
      data.push(api.data[i]);
    }
    coinList(data);
  })
  .catch((error) => {
    console.error(error.message);
  });

//Função buscar no Array data
function busca() {
  var texto = document.querySelector("input").value;
  if (!texto) {
    console.log("Nenhuma moeda encontrada");
    coinList(data);
  } else {
    const newData = new Array(
      data.find((coin) => {
        return coin.name.toLowerCase().includes(texto);
      })
    );
    coinList(newData);
  }
}

//Listar em tela
function coinList(data) {
  if (!data[0]) {
    document.getElementById("coins").innerHTML = "Nenhuma moeda encontrada";
  } else {
    console.log(data);
    var texto = "";
    for (let i = 0; i < data.length; i++) {
      //taking the historical date of each one
      var date = new Date(data[i].first_historical_data);

      texto += `
        <div class="media">
            <img src="coin.jpg" class="align-self-center mr-3" alt="coin">
            <div class="media-body">
            <h5 class="mt-2">${data[i].name}</h5>
            <p>${data[i].symbol} <br> ${date.toDateString()} </p>
            </div>
        </div>
                  `;
      document.getElementById("coins").innerHTML = texto;
    }
    console.log(data);
  }
}
