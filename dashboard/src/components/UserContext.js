import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

const UserContext = React.createContext({
  user: null,
  isLoadingUser: true,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.post(`${API_BASE_URL}/`, {}, { withCredentials: true });
        if (data.status && data.user) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoadingUser(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoadingUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;