import { Link } from 'react-router-dom';
import { Context } from '../contexts/Context';
import { ChangeEvent, useContext, useState } from 'react';

const SignUp = () => {
  const {state, dispatch} = useContext(Context)

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE_NAME',
      payload: {
        name: e.target.value
      }
    })
  }

  const handleChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE_AGE',
      payload: {
        age: parseInt(e.target.value)
      }
    })
  }


  return (
    <div>      
      Tela signup (Tema: {state.theme.status})
      <br />

      <input 
        type={'text'}
        placeholder='Digite um nome'
        value={state.user.name}
        onChange={handleChangeName}
      />

      <input 
        type={'text'}
        placeholder='Digite uma idade'
        value={state.user.age}
        onChange={handleChangeAge}
      />

      <br />
      <Link to="/exibir">Ir para showdata</Link>
    </div>
  );
};
export default SignUp;
