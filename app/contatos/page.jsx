import '@styles/contatos.css';


export default function Contatos() {
    return(
        <div id="content">
            <main className='main'>
                <section className='contato'>
                    <h1>Como você prefere falar com a gente?</h1>
                    <div className='redes'>
                        <div>
                            <h2>Email</h2>
                            <a href="#">agente@seunegocio.com</a>
                        </div>
                        <div>
                            <h2>Telefone</h2>
                            <a href="#">(xx) 111111-1111</a>
                        </div>
                        <div>
                            <h2>Instagram</h2>
                            <a href="#">@seunegocio</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}