import { createContext } from 'react';
import { useReducer } from 'react';
import { userReducer, userInitialState, UserType } from '../reducers/userReducer';
import { ChildrenProps } from '../types/childrenType';
import { reducerActionType } from '../types/reducersActionType';
import { themeInitialState, themeReducer, ThemeType } from '../reducers/themeReducer'

type initialStateType = {
  user: UserType;
  theme: ThemeType;
}

type ContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
}

const initialState = {
  user: userInitialState,
  theme: themeInitialState
}

export const Context = createContext<ContextType>({
  state: initialState, 
  dispatch: () => null
})

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  user: userReducer(state.user, action),
  theme: themeReducer(state.theme, action)
})

export const ContextProvider = ({children}: ChildrenProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)
  return(
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
}