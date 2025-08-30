import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
  updateProfile
} from 'firebase/auth';
import { auth } from '../lib/firebase';
import { createUser, getUser, updateUser } from './database';
import { User } from '../types/database';

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, displayName: string, role: 'student' | 'proctor' | 'admin') => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfile: (updates: Partial<User>) => Promise<void>;
}

export const authService = {
  // Sign up new user
  signUp: async (email: string, password: string, displayName: string, role: 'student' | 'proctor' | 'admin'): Promise<void> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // Update Firebase Auth profile
      await updateProfile(firebaseUser, { displayName });

      // Create user document in Firestore
      const userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'> = {
        email,
        displayName,
        role,
      };

      await createUser(userData);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(message || 'Failed to create account');
    }
  },

  // Sign in existing user
  signIn: async (email: string, password: string): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(message || 'Failed to sign in');
    }
  },

  // Sign out
  logout: async (): Promise<void> => {
    try {
      await signOut(auth);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(message || 'Failed to sign out');
    }
  },

  // Get current user data from Firestore
  getCurrentUserData: async (firebaseUser: FirebaseUser): Promise<User | null> => {
    try {
      return await getUser(firebaseUser.uid);
    } catch (error) {
      console.error('Error fetching user data:', error instanceof Error ? error.message : error);
      return null;
    }
  },

  // Update user profile
  updateUserProfile: async (userId: string, updates: Partial<User>): Promise<void> => {
    try {
      await updateUser(userId, updates);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(message || 'Failed to update profile');
    }
  },

  // Listen to auth state changes
  onAuthStateChange: (callback: (user: User | null) => void) => {
    return onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userData = await authService.getCurrentUserData(firebaseUser);
        callback(userData);
      } else {
        callback(null);
      }
    });
  }
};
