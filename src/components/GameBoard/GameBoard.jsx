import React, { useState, useEffect, useRef } from "react";
import SimonBtn from '../SimonBtn/SimonBtn';
import PowerBtn from '../PowerBtn/PowerBtn';
import './GameBoard.css';

function GameBoard(){
    const [sequence, setSequence] = useState([]);
    const [start, setStart] = useState(false);
    const [sequenceIdx, setSequenceIdx] = useState(0);

    const colors = ["green", "red", "yellow", "blue"];
    
    const buttonsRefs = useRef(colors.map(() => React.createRef()))

    const resetGame = () => {
        setSequence([]);
        setStart(false);
        setSequenceIdx(0);
    }

    const addNewColor = () => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const newSequence = [...sequence, color];
        setSequence(newSequence);
    }

    const handleNextLevel = () => {
        if(!start){
            setStart(true)
            addNewColor()
        }
    }

    const handleColorClick = (e) => {
        if(start){
            const selectedBtnColor = e.target.getAttribute("color");
            if(sequence[sequenceIdx] === selectedBtnColor) {
                if(sequenceIdx === sequence.length - 1){
                    setTimeout(()=>{
                        setSequenceIdx(0);
                        addNewColor();
                    }, 250)
                }else{
                    setSequenceIdx(sequenceIdx + 1)
                }

                // missing colors from sequence
            } else {
                resetGame()
                // alert("You lose")
            }
        }
    }

    useEffect(() => {
        if(sequence.length > 0) {
            const showSequence = (idx = 0) => {
                let ref = null;
                
                if(sequence[idx] === "green") ref = buttonsRefs.current[3];
                if(sequence[idx] === "red") ref = buttonsRefs.current[2];
                if(sequence[idx] === "blue") ref = buttonsRefs.current[1];
                if(sequence[idx] === "yellow") ref = buttonsRefs.current[0];
                
                //highlight the referenced element
                setTimeout(() => {
                ref?.current?.classList.add("btn_sequence");
                
                setTimeout(() => {
                    ref?.current?.classList.remove("btn_sequence");
                    if (idx < sequence.length - 1) {
                        showSequence(idx + 1);
                    }
                }, 250) ;
            }, 250);            
        }
        showSequence()   
        }
    }, [sequence])
    

    return (
        <div 
            data-testid="simon_board" 
            className="board"
        >
            <div className='board-row'>
                <SimonBtn onClick={handleColorClick} ref={buttonsRefs.current[0]} color={"yellow"} disabled={false}/>
                <SimonBtn onClick={handleColorClick} ref={buttonsRefs.current[1]} color={"blue"} disabled={false}/>   
            </div>
            <div className="board-row">
                <SimonBtn onClick={handleColorClick} ref={buttonsRefs.current[2]} color={"red"} disabled={false}/>
                <SimonBtn onClick={handleColorClick} ref={buttonsRefs.current[3]} color={"green"} disabled={false}/>
            </div>
            <div className='center'>
                <PowerBtn sequence={sequence} onClick={handleNextLevel}/>
            </div>
        </div>
    )
}

export default GameBoard;