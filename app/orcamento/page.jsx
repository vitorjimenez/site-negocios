import '@styles/orcamento.css';

export default function Orcamento() {
    return(
        <div id="content">
            <main className='main-orc'>
                <section className="apr">
                        <div className='imagem'></div>
                        <p>Diferenciados no mercado, levamos o nosso negócio ao outro nível.</p>
                </section>
                <section className="cadastro">
                        <p>Para te oferecer as melhores <br/> oportunidades nos fale por onde podemos te contatar.</p>
                        <form action="">
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required placeholder="example@gmail.com"/>
                        </div>
                        <div className="tel">
                            <label htmlFor="tel">Telefone</label>
                            <input type="tel" name="tel" id="tel" required placeholder="(55) 99 9999999"/>
                        </div>
                            <button>Enviar</button>
                        </form>
                </section>
            </main>
        </div>
    );
}