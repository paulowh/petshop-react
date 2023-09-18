import './App.css';
import './assets/css/base/base.css'
import { Outlet } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';

function App() {
  return (
    <>
      <Cabecalho />
      <Outlet />
      <p>rodapé</p>
    </>
  );
}

export default App;
