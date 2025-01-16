import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [valor, setValor] = useState('');
  const [moedaOrigem, setMoedaOrigem] = useState('USD');
  const [moedaDestino, setMoedaDestino] = useState('BRL');
  const [resultado, setResultado] = useState(null);
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState('');
  const [moedas, setMoedas] = useState([]);

  useEffect(() => {
    const fetchMoedas = async () => {
      try {
        const response = await axios.get('https://v6.exchangerate-api.com/v6/5f3feed4bcc18739616e67c9/latest/BRL');
        const moedasDisponiveis = Object.keys(response.data.conversion_rates);
        setMoedas(moedasDisponiveis);
      } catch (error) {
        console.error('Erro ao carregar moedas', error);
      }
    };
    fetchMoedas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://conversormoeda-production.up.railway.app/api/conversor/converter', {
        valor: parseFloat(valor),
        moedaOrigem,
        moedaDestino
      });
      setResultado(response.data.valorConvertido);
      setUltimaAtualizacao(response.data.ultimaAtualizacao);
    } catch (error) {
      console.error('Erro ao converter as moedas', error);
    }
  };

  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <form onSubmit={handleSubmit}>
        <div className="campoConversao">
          <select value={moedaOrigem} onChange={(e) => setMoedaOrigem(e.target.value)}>
            {moedas.map((moeda) => (
              <option key={moeda} value={moeda}>
                {moeda}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            placeholder="Valor"
            required
          />
        </div>
        <div className="campoConversao">
          <select value={moedaDestino} onChange={(e) => setMoedaDestino(e.target.value)}>
            {moedas.map((moeda) => (
              <option key={moeda} value={moeda}>
                {moeda}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={resultado ? resultado.toFixed(2) : ''}
            disabled
            placeholder="Resultado"
          />
        </div>
        <button type="submit">Converter</button>
      </form>

      {ultimaAtualizacao && (
        <div className="ultima-atualizacao">
          <p>Última atualização: {ultimaAtualizacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
