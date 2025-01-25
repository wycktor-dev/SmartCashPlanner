/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ClientLayout from "./layouts/ClientLayout";
import RootLayout from "./layouts/RootLayout";

// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// Next css
import styles from "./styles/page.module.css";

import Button from "react-bootstrap/Button";
import { useState } from "react";

const Home: React.FC = () => {

  const [users, setUsers] = useState([]);

  async function test() {
    try {
      const response = await fetch("/pages/teste"); // Faz a chamada para a API
      const data = await response.json();
      setUsers(data); // Armazena os usuários no estado
      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }
  return (
    <RootLayout>
      <ClientLayout>
        <div>
          <h1>Home do Sistema</h1>
          <Button onClick={test} size="lg">Teste</Button>
          <div>
            <h2>Usuários:</h2>
            <ul>
              {users.map((user: any) => (
                <li key={user.id}>{user.name}</li> // Ajuste os campos conforme o modelo User
              ))}
            </ul>
          </div>
        </div>
      </ClientLayout>
    </RootLayout>
  );
}

export default Home;