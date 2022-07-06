import './bootstrap.css';
import './App.css';

const NavMenu = () => {
  return (
      <nav>
          <a href="">PAGINA INICIAL</a>
          <a href="">PESQUISAR</a>
          <a href="">AGUARDANDO RECEBIMENTO</a>
          <a href="">REDEFINIR SENHA</a>
          <a href="">SAIR</a> 
      </nav>

  );
}

const Login = () => {
  return (
    <div className='container'>
      <form>
        <input type="text" placeholder="USUARIO" className=''/>
        <input type="password" placeholder="SENHA" className=''/>
        <input type="submit" value="LOGIN" className=''/>
      </form>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <NavMenu />
      <Login />
    </div>
  );
}

export default App;
