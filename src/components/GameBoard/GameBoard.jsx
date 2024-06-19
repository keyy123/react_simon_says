import './GameBoard.css';
import SimonBtn from '../SimonBtn/SimonBtn';
function GameBoard(){
    return (
        <div 
            data-testid="simon_board" 
            className="board"
        >
            <div className='board-row'>
                <SimonBtn color={"yellow"} disabled={false}/>
                <SimonBtn color={"blue"} disabled={false}/>   
            </div>
            <div className="board-row">
                <SimonBtn color={"red"} disabled={false}/>
                <SimonBtn color={"green"} disabled={false}/>
            </div>
            <div className='center'></div>
        </div>
    )
}

export default GameBoard;