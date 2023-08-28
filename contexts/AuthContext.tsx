import { signout } from "@/services/apiServices";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
const AuthContext = createContext<any>({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(token);
    } else {
      setUser(null);
    }
    setLoading(false);
  }, []);

  async function logout() {
    localStorage.removeItem("token");
    setUser(null);
    await signout({});
  }

  return (
    <AuthContext.Provider value={{ user, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
