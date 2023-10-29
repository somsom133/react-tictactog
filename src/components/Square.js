import React from "react";
import "./Square.css";

//export default class Square extends React.Component {

// 방법 1 : const Square = (props) => {
const Square = ({ onFnClick, value}) => {
    return (
        <button className="square" 
            // onClick={() => { props.onFnClick() }}>
            // {props.value}
            onClick={onFnClick}>
            {value}
        </button>
    )
}
export default Square;