
    const Imgwizards = {
          
      Grifinoria: {
            imagem: "./img/Grinffindor.JPG"
          },
          LufaLufa: {
            imagem: "./img/Hufflepuff.JPG"
          },
          Corvinal: {
            imagem: "./img/Ravenclaw.JPG"
          },
          Sonserina: {
            imagem: "./img/Slytherin.JPG"
          }
        };
      
        function mostrarInfo(casa) {
      const container = document.getElementById('info-container');
      const texto = document.querySelector(`#${casa} .description`).innerHTML;
      const imagem = Imgwizards[casa];

        container.innerHTML = `
      <div class="info-content ${casa}">
      <p>${texto}</p>
      <img src="${imagem.imagem}" alt="Bruxos ${casa}">
      </div>
  `;

  container.scrollIntoView({ behavior: 'smooth' });
}

        