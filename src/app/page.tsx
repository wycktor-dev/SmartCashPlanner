"use client";

import ClientLayout from "./layouts/ClientLayout";
import RootLayout from "./layouts/RootLayout";

// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// Next css
import styles from "./styles/page.module.css";
import Button from "react-bootstrap/Button";

import { useEffect, useState } from "react";
import { NavegationBar } from "./components/NavegationBar";

export interface IUsers {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    const users = data.users;
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <RootLayout>
      <ClientLayout>
      <NavegationBar></NavegationBar>
        <div>
          <h1>Home do Sistema</h1>
          <Button size="lg">Teste</Button>
          {users.length > 0 && (
            <ul>
              {users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )}
        </div>
      </ClientLayout>
    </RootLayout>
  );
}

export default Home;