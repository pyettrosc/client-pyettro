import './main.css';
import Registrar from '../components/register.js';

function Cadastro() {
    return (
      <div className="grid-container">
      <header className="header"></header>
      <aside className="sidebar">Menu Lateral</aside>
      <main className="content">
        {Registrar()}
      </main>
    </div>
    );
  }
  
  export default Cadastro;