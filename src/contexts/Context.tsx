import { createContext } from 'react';
import { useReducer } from 'react';
import { userReducer, userInitialState, UserType } from '../reducers/userReducer';
import { ChildrenProps } from '../types/childrenType';
import { reducerActionType } from '../types/reducersActionType';

type initialStateType = {
  user: UserType;
}

type ContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
}

const initialState = {
  user: userInitialState
}

export const Context = createContext<ContextType>({
  state: initialState, 
  dispatch: () => null
})

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  user: userReducer(state.user, action)
})

export const ContextProvider = ({children}: ChildrenProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)
  return(
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
}