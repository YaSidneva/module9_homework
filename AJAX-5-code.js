const btnNode = document.querySelector(".j-btn-request");

const resultNode = document.querySelector(".j-result");

btnNode.addEventListener("click", () => {
  const number = document.querySelector(".inp1").value;
  const limit = document.querySelector(".inp2").value;
  console.log(number);
  console.log(limit);
  console.log(`https://picsum.photos/v2/list?page=${number}&limit=${limit}`);

  if ((number < 1 || number > 10) && (limit < 1 || limit > 10)) {
    resultNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
  } else if (number < 1 && number > 10) {
    resultNode.innerHTML = "Номер страницы вне диапазона от 1 до 10";
  } else if (limit < 1 || limit > 10) {
    resultNode.innerHTML = "Лимит вне диапазона от 1 до 10";
  } else {
    fetch(`https://picsum.photos/v2/list?page=${number}&limit=${limit}`)
      .then((response) => {
        // Объект ответа на запрос
        console.log("response", response);
        // Превращаем объект в JSON. Мы не можем его сразу прочитать,
        // надо отдать в следующий then
        return response.json();
      })
      .then((data) => {
        // Объект результата в формате JSON
        console.log("data", data);
        displayResult(data);
      })
      .catch(() => {
        console.log("error");
      });
  }
});

function displayResult(apiData) {
  let cards = "";

  apiData.forEach((item) => {
    const cardBlock = `
          <div class="card">
            <img
              src="${item.download_url}"
              class="card-image"
            />
            <p>${item.author}</p>
          </div>
        `;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
}
