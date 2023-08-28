import Signup from "@/components/signup/Signup";
import { AuthContextProvider } from "@/contexts/AuthContext";

export default function signup() {
  return (
    <AuthContextProvider>
      <Signup />
    </AuthContextProvider>
  );
}
