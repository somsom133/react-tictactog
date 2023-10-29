import React from 'react'
//import React, { Component, useState } from 'react'
import Square from './Square'
import "./Board.css";


//export default class Board extends Component {
//const Board = (props) => {
const Board = ( {squares, onClick}) => {
    // constructor(props){
    //     super(props);
    //     this.state= {
    //         squares : Array(9).fill(null),
    //     }
    // }


    // const [squares, setSquares]   = useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext] = useState(true);
    //const [first, setfirst] = useState(second)

   //handleClick이 App.js로 이동
    //handleClick(i){
    //const handleClick = (i) => {
        
        // const newSquares = squares.slice();

        // // 게임 끝났을 때의 클릭을 막기 위한 if문 추가
        // if(calculateWinner(newSquares) || newSquares[i]){ // claclulate winner의 값이 있거나, newSquares[i] = i가 값이 있으면 return하여 아래 코드 실행을 시키지 않도록 한다.
        //     return;
        // }


        // newSquares[i] = xIsNext ? 'X' : 'O';
        // setSquares(newSquares);
        // 방법1:  setXIsNext(!xIsNext);
        // 방법2 : previousState를 가져와서 함수를 이용해서 ! 반대값으로 바꾸는 방법이 있음 (함수형)
        // previousState : 이전의 state 값을 가리킴 
        // setXIsNext( 원하는 이름명  => !원하는 이름명); 
        //setXIsNext(previousState => !previousState);
        // 그러면 위 두가지의 방법차이는? 
    //}

    // renderSquare(i){
    const renderSquare = (i) => {
        return <Square 
            value={ squares[i]}
            onFnClick={() => onClick(i)} 
        />
    }


    //render() 
    return (
        <div className='board-wrapper'>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
    //}
}

export default Board;