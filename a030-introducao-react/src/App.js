import logo from './logo.svg';
import './App.css';

function App() {
  const titulo = "Video do Bruno"
  function reproduzVideo(){
    alert("Rodando")
  }
  return (
    <div class="tela-inteira">
    <header>
        <h1>LabeTube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca"/>
    </header>

    <main>
        <nav class="menu-vertical">
            <ul>
                <li class="botoes-meunu-vertical">Início</li>
                <li class="botoes-meunu-vertical">Em alta</li>
                <li class="botoes-meunu-vertical">Inscrições</li>
                <hr>
                </hr>
                <li class="botoes-meunu-vertical">Originais</li>
                <li class="botoes-meunu-vertical">Histórico</li>
            </ul>
        </nav>

        <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                <h4>{titulo}</h4>
            </div>
        </section>
    </main>

    <footer>
        <h4>Oi! Eu moro no footer!</h4>
    </footer>
</div>
  );
}

export default App;
