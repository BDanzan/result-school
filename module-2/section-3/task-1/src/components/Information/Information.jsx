import {InformationLayout} from "./InformationLayout.jsx";

const Information = ({state, handlers, extraParams}) => {
    const { currentPlayer, isGameEnded, isDraw } = state;
    const { setCurrentPlayer, setIsGameEnded, setIsDraw, setField } = handlers;
    const { defaultParamsForGame } = extraParams;

    const resetGame = () => {
        setCurrentPlayer(defaultParamsForGame.currentPlayer);
        setIsGameEnded(defaultParamsForGame.isGameEnded);
        setIsDraw(defaultParamsForGame.isDraw);
        setField(defaultParamsForGame.field);
    }

    return <InformationLayout currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw}
                              resetGame={resetGame}/>;
};

export default Information;