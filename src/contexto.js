import { createContext, useContext, useState } from 'react';

const UsuarioContext = createContext({
  nome: '',
  setNome: () => {},
  avisos: [],
  addAviso: () => {},
});

export function UsuarioProvider({ children }) {
  const [nome, setNome] = useState('');
  const [avisos, setAvisos] = useState([]);

  function addAviso(aviso) {
    setAvisos((lista) => [aviso, ...lista]);
  }

  function sair() {
    setNome('');
    setAvisos([]);
  }

  return (
    <UsuarioContext.Provider value={{ nome, setNome, avisos, addAviso, sair }}>
      {children}
    </UsuarioContext.Provider>
  );
}

export function useUsuario() {
  return useContext(UsuarioContext);
}
