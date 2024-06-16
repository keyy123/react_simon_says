import './GameBoard.css';
function GameBoard({children}){
    return (
        <div 
            data-testid="simon_board" 
            className="board"
        >
            {children}
        </div>
    )
}

export default GameBoard;