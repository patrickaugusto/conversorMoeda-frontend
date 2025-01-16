import React, { useState } from 'react';
import SeletorMoedas from './SeletorMoedas';

function Conversor({ moedas, onConversao }) {
  const [valor, setValor] = useState('');
  const [moedaOrigem, setMoedaOrigem] = useState('USD');
  const [moedaDestino, setMoedaDestino] = useState('BRL');
  const [resultado, setResultado] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const dados = {
      valor: parseFloat(valor),
      moedaOrigem,
      moedaDestino,
    };
    onConversao(dados).then((res) => setResultado(res.valorConvertido.toFixed(2)));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="campoConversao">
        <SeletorMoedas
          moedas={moedas}
          selected={moedaOrigem}
          onChange={setMoedaOrigem}
        />
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Valor"
          required
        />
      </div>
      <div className="campoConversao">
        <SeletorMoedas
          moedas={moedas}
          selected={moedaDestino}
          onChange={setMoedaDestino}
        />
        <input
          type="text"
          value={resultado}
          disabled
          placeholder="Resultado"
        />
      </div>
      <button type="submit">Converter</button>
    </form>
  );
}

export default Conversor;
