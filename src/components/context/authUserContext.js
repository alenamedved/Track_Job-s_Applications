import { createContext, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
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
const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.name,
});
// eslint-disable-next-line react/prop-types
export function AuthUserProvider({ children }) {
  //   console.log(authUserContext, 'authUserContext');
  //   const [user, loading, error] = useAuthState(auth);
  const authUser = useFirebaseAuth();
  //   const formatedUser = user && formatAuthUser(user);
  return <authUserContext.Provider value={authUser}>{children}</authUserContext.Provider>;
}

export const useAuth = () => useContext(authUserContext);
