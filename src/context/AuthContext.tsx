import React, { createContext, useContext, useState, useEffect } from 'react';

type Role = 'admin' | 'user' | null;

interface User {
  username: string;
  role: Role;
}

interface AuthContextType {
  user: User | null;
  signIn: (username: string, role: Role) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Load user from local storage on mount
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signIn = (username: string, role: Role) => {
    const newUser = { username, role };
    setUser(newUser);
    localStorage.setItem('auth_user', JSON.stringify(newUser));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
