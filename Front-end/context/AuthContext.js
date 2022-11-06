import { createContext, useEffect, useReducer } from 'react'
import { defaultAuthContextState, AuthReducer, init } from './AuthReducer'
import UsersEndpoints from '../Api/Users'

const usersEndpoints = new UsersEndpoints()

export const AuthContext = createContext({})

function AuthContextProvider({ children }) {
  const [AuthState, AuthDispatch] = useReducer(AuthReducer, defaultAuthContextState, init)

  useEffect(() => {
    const controller = new AbortController()

    usersEndpoints.getUser(controller)
      .then(data => {
        AuthDispatch({ type: 'update_user', payload: data })
      })
      .catch(error => {
        AuthDispatch({ type: 'reset_all' })
      })

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ AuthState, AuthDispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
