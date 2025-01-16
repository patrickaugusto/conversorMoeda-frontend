import React from 'react';

function Resultado({ resultado }) {
  return (
    <div className="ultima-atualizacao">
      <p>
        <strong>Valor Convertido:</strong> {resultado.valorConvertido.toFixed(2)}
      </p>
      <p>
        <strong>Última Atualização:</strong> {resultado.ultimaAtualizacao}
      </p>
    </div>
  );
}

export default Resultado;
