import { useState, useEffect } from "react";
import { firebaseAuth } from "../firebase/firebaseAuth";
import { User } from "../types/User";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        const userData: User = {
          uid: firebaseUser.uid,
          email: firebaseUser.email || "",
          displayName: firebaseUser.displayName || "",
        };
        setUser(userData);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  };

  const createUserWithEmailAndPassword = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    try {
      const { user } = await firebaseAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (user) {
        await user.updateProfile({ displayName });
      }
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseAuth.signOut();
    } catch (error) {
      throw error;
    }
  };

  return {
    user,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
};

export default useAuth;