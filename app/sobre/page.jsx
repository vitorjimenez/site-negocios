import '@styles/sobre.css';


export default function Sobre() {
    return (
      <div className="home-div-main">
        <main className='main-sb'>
            <section className="main_c_al">
                <h1>Sua Logo</h1>
                <div className='img'></div>
                <p>Excelência no que fazemos desde 20XX. Esforçados em te entregar o melhor que você merece!</p>
            </section>
            <section className="map">
                <h2>Onde Estamos</h2>
                <iframe className='iframe' title="Map for reference" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14632.153420901986!2d-46.92100214028111!3d-23.531122852500225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1731214861649!5m2!1spt-BR!2sbr"></iframe>
            </section>
        </main>
        <footer>
        </footer>
      </div>
    );
  }