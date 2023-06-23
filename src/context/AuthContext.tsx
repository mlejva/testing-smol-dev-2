import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types/User';
import { firebaseAuth } from '../firebase/firebaseAuth';
import { useHistory } from 'react-router-dom';

interface AuthContextData {
  user: User | null;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  createUserWithEmailAndPassword: (email: string, password: string, displayName: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        const userData: User = {
          uid: user.uid,
          email: user.email || '',
          displayName: user.displayName || '',
        };
        setUser(userData);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithEmailAndPassword = async (email: string, password: string) => {
    await firebaseAuth.signInWithEmailAndPassword(email, password);
    history.push('/');
  };

  const createUserWithEmailAndPassword = async (email: string, password: string, displayName: string) => {
    const userCredential = await firebaseAuth.createUserWithEmailAndPassword(email, password);
    await userCredential.user?.updateProfile({ displayName });
    history.push('/');
  };

  const signOut = async () => {
    await firebaseAuth.signOut();
    history.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};