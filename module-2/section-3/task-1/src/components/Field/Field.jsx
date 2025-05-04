import {FieldLayout} from "./FieldLayout";

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

const Field = ({state, handlers}) => {
    const { field, currentPlayer, isGameEnded } = state;
    const { setField, setCurrentPlayer, setIsGameEnded, setIsDraw } = handlers;


    const clickField = (index) => {
        const newField = structuredClone(field);
        if (newField[index] === '') {
            newField[index] = currentPlayer;

            checkWhoWin(newField, currentPlayer)
            if (!isGameEnded) {
                setField(newField);
                currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
            }
        }
    }

    const checkWhoWin = (field, currentPlayer) => {
        const moves = [];

        field.forEach((item, index) => {
            if (item === currentPlayer) {
                moves.push(index);
            }
        })

        if (moves.length > 2 && !isGameEnded) {
            const result = WIN_PATTERNS.some(pattern => {
                return pattern.every((item) => {

                    for (let i = 0; i < moves.length; i++) {
                        if (item === moves[i]) {
                            return true;
                        }
                    }

                    return false;
                })
            })


            if (result) {
                setIsGameEnded(true);
            }
        }

        if (moves.length > 4 && !isGameEnded) {
            setIsDraw(true);
            setIsGameEnded(true);
        }
    }

    return <FieldLayout field={field} clickField={clickField}/>;
};

export default Field;