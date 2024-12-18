import "@styles/home.css";

export default function Home() {
  return (
    <div className="home-div-main">
      <div className="header-main">
        <h1>Daremos o próximo passo juntos</h1>
        <div className="home-div-inicial-content">
          <p>
            Esse é um texto demonstrativo totalmente ajustável ao seu negócio,
            juntos vamos criar novas oportunidades!
          </p>
          <div className="home-img-inicial-content">
            {/* <img src="caminho-da-imagem.jpg" alt="Descrição da imagem" /> */}
          </div>
        </div>
      </div>
      <div className="next-section">
        <h2>Sua oportunidade é aqui!</h2>
        <div className="main-content">
          <div className="large-image"></div>
          <div className="grid-images">
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
