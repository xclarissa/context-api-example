import { Link } from 'react-router-dom';
import { Context } from '../contexts/Context';
import { useContext } from 'react';

const SignUp = () => {
  const {name} = useContext(Context)

  return (
    <div>
      Tela signup {name}
      <br />
      <Link to="/exibir">Ir para showdata</Link>
    </div>
  );
};
export default SignUp;
