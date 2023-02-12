const btnNode = document.querySelector(".j-btn-request");

const resultNode = document.querySelector(".j-result");

btnNode.addEventListener("click", () => {
  const width = document.querySelector(".inp1").value;
  const height = document.querySelector(".inp2").value;
  console.log(width);
  console.log(height);
  console.log(`https://picsum.photos/${width}/${height}`);
  if (width < 100 || width > 300 || height < 100 || height > 300) {
    resultNode.innerHTML = "одно из чисел вне диапазона от 100 до 300";
  } else {
    fetch(`https://picsum.photos/${width}/${height}`)
      .then((response) => {
        // Объект ответа на запрос
        console.log("response", response);
        // Превращаем объект в JSON. Мы не можем его сразу прочитать,
        // надо отдать в следующий then
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
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
  const cardBlock = `
          <div class="card">
            <img
              src="${apiData}"
              class="card-image"
            />
          </div>
        `;

  resultNode.innerHTML = cardBlock;
}
