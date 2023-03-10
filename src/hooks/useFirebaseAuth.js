import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { db } from '../firebase';
import { query, getDocs, collection, where, addDoc } from 'firebase/firestore';

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName || user.email,
});

export default function useFirebaseAuth() {
  const [user, loading, error] = useAuthState(auth);

  console.log('useFirebaseAuth run');

  const authUser = user && formatAuthUser(user);

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, 'users'), where('uid', '==', user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, 'users'), {
          uid: user.uid,
          name: user.displayName,
          authProvider: 'google',
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
      });
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset link sent!');
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  return {
    authUser,
    loading,
    error,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };
}
