import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../contexts/Context';


const ShowData = () => {
  const {state, dispatch} = useContext(Context)
  return (
    <div>
      <h3>Tela Show Data</h3>
      {state.user.name ?
        <>
          Meu nome é: {state.user.name} <br />
          Minha idade: {state.user.age} anos.
          <br />
        </>
        : 
        <>Não há informações a serem exibidas </>
        
      }
      
      <br />
      <Link to="/">Voltar para Sign up</Link>
    </div>
  );
};
export default ShowData;
