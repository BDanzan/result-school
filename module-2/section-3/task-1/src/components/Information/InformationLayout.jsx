export const InformationLayout = ({currentPlayer, isGameEnded, isDraw, resetGame}) => {
    return (
        <>
            {!isGameEnded && <h2>Ход игрока: {currentPlayer}</h2>}
            {isGameEnded && !isDraw && <h2>Победа игрока: {currentPlayer}</h2>}
            {isDraw && <h2>Ничья</h2>}
            <button onClick={() => (resetGame())}>Начать заново</button>
        </>
    );
}