import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Conversor from './components/Conversor';
import './App.css';

function App() {
  const [moedas, setMoedas] = useState([]);
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState('');

  useEffect(() => {
    const fetchMoedas = async () => {
      try {
        const response = await axios.get(
          'https://v6.exchangerate-api.com/v6/5f3feed4bcc18739616e67c9/latest/BRL'
        );
        const moedasDisponiveis = Object.keys(response.data.conversion_rates);
        setMoedas(moedasDisponiveis);
      } catch (error) {
        console.error('Erro ao carregar moedas', error);
      }
    };
    fetchMoedas();
  }, []);

  const handleConversao = async (dados) => {
    try {
      const response = await axios.post(
        'https://conversormoeda-production.up.railway.app/api/conversor/converter',
        dados
      );
      setUltimaAtualizacao(response.data.ultimaAtualizacao);
      return response.data;
    } catch (error) {
      console.error('Erro ao converter as moedas', error);
      return { valorConvertido: '' };
    }
  };

  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <Conversor moedas={moedas} onConversao={handleConversao} />
      {ultimaAtualizacao && (
        <div className="ultima-atualizacao">
          <p>Última atualização: {ultimaAtualizacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
