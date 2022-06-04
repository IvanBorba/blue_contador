import "./App.css";
import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
// import React from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  // const [number, setNumber] = React.useState(0);

  const addOne = () => {
    setNumber(number + 1);
  };

  const removeOne = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <Display text={number} />
      <div>
        <Button onClick={removeOne}>-</Button>
        <Button onClick={addOne}>+</Button>
      </div>
    </div>
  );
};

export default App;

// Lista de passos pra criação da aplicação da dinâmica 1:
// X Criar o projeto com o npx;
// X Rodar o projeto em um terminal;
// X Limpar o código inicial;
// X Utilizar o useState pra criar uma variavel numérica que inicie em 0;
// X Renderizar essa variável;
// X Criar duas funções, uma pra subtrair um e uma pra adicionar um na variavel;
// X Criar dois botões, um para cada função;
// X Chamar as funções no onClick dos botões;
