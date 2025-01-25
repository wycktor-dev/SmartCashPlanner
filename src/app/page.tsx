"use client";

import ClientLayout from "./layouts/ClientLayout";
import RootLayout from "./layouts/RootLayout";

// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// Next css
import styles from "./styles/page.module.css";

import Button from "react-bootstrap/Button";

const Home: React.FC = () => {

  const handleClick = () => {
    console.log('click');
  }

  return (
    <RootLayout>
      <ClientLayout>
        <div>
          <h1>Home do Sistema</h1>
          <Button size="lg">Teste</Button>
        </div>
      </ClientLayout>
    </RootLayout>
  );
}

export default Home;