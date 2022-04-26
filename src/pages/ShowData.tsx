import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../contexts/Context';


const ShowData = () => {
  const {name, age} = useContext(Context)
  return (
    <div>
      Tela Show data de {name} idade: {age}
      <Link to="/">Voltar para Sign up</Link>
    </div>
  );
};
export default ShowData;
