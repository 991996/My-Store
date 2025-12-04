import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find((user) => {
      return user.email === email && user.password === password;
    });
    if (found) {
      localStorage.setItem("loggedUser", JSON.stringify(found));
      setUser(found);
      return { success: true };
    }
    return { error: "Your email or password is not correct..!" };
  };
  const signUp = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((user) => user.email === newUser.email)) {
      return { error: "This Email is already exist..!!" };
    }
    if (newUser.password.length < 8) {
      return { error: "The password must be at least 8 characters long." };
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
    return { success: true };
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
