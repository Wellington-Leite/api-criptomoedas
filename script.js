//My api key
var apiKey = {
  key: "Sua chave aqui",
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
    var texto = "";
    // Get 20 coins and symbols
    for (let i = 0; i < 20; i++) {
      //Show API information
      data.push(api.data[i]);

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
  })
  .catch((error) => {
    console.error(error.message);
  });
