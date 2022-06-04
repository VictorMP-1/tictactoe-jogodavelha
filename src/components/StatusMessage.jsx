import React from 'react';

function StatusMessage({ winner, current }) {
  // const message = winner
  // ? `Winner is ${winner}`
  // : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <div className="staus-message">
      {winner && (
        <>
          O vencedor é {''}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          O próximo jogador é {''}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}
            {''}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> e {''}
          <span className="text-orange">O</span> empataram
        </>
      )}
    </div>
  );
}

export default StatusMessage;
