import { createContext, useContext } from 'react';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signInWithGoogle: async () => {},
  logInWithEmailAndPassword: async () => {},
  registerWithEmailAndPassword: async () => {},
  sendPasswordReset: async () => {},
  logout: async () => {},
});

// eslint-disable-next-line react/prop-types
export function AuthUserProvider({ children }) {
  const authUser = useFirebaseAuth();

  return <authUserContext.Provider value={authUser}>{children}</authUserContext.Provider>;
}

export const useAuth = () => useContext(authUserContext);
