import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  
  const [history, setHistory] = useState([{squares : Array(9).fill(null)}]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  
  const calculateWinner= (squares) => {
      const lines = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
      ];
      for (let index = 0; index < lines.length; index++) {
          const [a,b,c] = lines[index];
          if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){ //a가 x라면 , a= x, a = b (x인거야?), a = c(X) 이면 
              return squares[a]; // x인지 o인지가 승패가 결정된다 여기서 
          }
      }
      // 만약 승패가 나지 않았다면 return을 통해 null을 넘긴다. 
      return null;
  }

//  const current = history[history.length -1]; // history 배열 안의 가장 마지막 = 최신 데이터를 가져오기 위해서 맨 마지막껄 가져온다. (length= 1부터 시작함에 따라 -1를 진행함)
  const current = history[stepNumber];


  //const winner = calculateWinner(squares);
  const winner = calculateWinner(current.squares);
  let status;

  // player 표기와 게임 승리자 표시 부분 처리 
  if(winner) {
      status = `winner :${winner}`
  } else {
      status =`Next Player ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber +1); // 처음부터 선택한 스탭까지 복사
    const newCurrent = newHistory[newHistory.length-1]; // 현재만을 선택하기 위해 
    // const newSquares = current.squares.slice(); // 원본을 수정하지 않기 위해 복사본을 만들어서 넣어주기 위해서 slice를 사용하며, state의 불변성을 지켜주기위해서 slice를 사용한다. 
    const newSquares = newCurrent.squares.slice(); // newCurrent로 변경!
    
    // 게임 끝났을 때의 클릭을 막기 위한 if문 추가
    //로직 끊기 
    if(calculateWinner(newSquares) || newSquares[i]){ // claclulate winner의 값이 있거나, newSquares[i] = i가 값이 있으면 return하여 아래 코드 실행을 시키지 않도록 한다.
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    // setHistory([...history, {squares : newSquares}])// 전개연산자를 통해서 복사본에 데이터를 넣어준다. 
    setHistory([...newHistory, {squares : newSquares}])// newHistory로 바꿨기 때문에 변경
    setXIsNext(prev => !prev);

    setStepNumber(newHistory.length);
  }

  const moves = history.map((step,move)=>{ // step은 history 배열 안의 것들을 받아주는 변수,  move 는 인덱스 값을 뜻함(0부터)
    const desc = move ? 'Go to move #'+ move  : 'Go to game Start';
    return (
    <li key={move}>
      <button onClick={() => jumpTo(move) }>{desc}</button>
    </li>
    )
  })

  const jumpTo = (step) => { //step 0부터 시작하는 숫자로 받아올 수 있음
    setStepNumber(step);
    setXIsNext((step % 2) === 0); // 히스토리를 돌린 이후에 다음 유저가 O인지 X인지를 구분하기 위해서 적는 코드 부분. 짝수이면 X를 , 홀수이면 O가 순서에 해당된다    
  }


  return (
    <div className="game">        
      <div className="game-board">
        <Board squares={current.squares} onClick ={(i) => handleClick(i)}/>
      </div>
      
      <div className="game-info">
          <div className='status'>{status}</div>
          <ol>
            {moves}
          </ol>
      </div>
    </div>
  );
}

export default App;
