import {Field, Information} from './components/index.js';
import {useState} from 'react'
import styles from './Game.module.css'

const defaultParamsForGame = {
    currentPlayer: 'X',
    isGameEnded: false,
    isDraw: false,
    field: [
        '', '', '',
        '', '', '',
        '', '', '',
    ]
}

export const Game = () => {
    const [currentPlayer, setCurrentPlayer] = useState(defaultParamsForGame.currentPlayer);
    const [isGameEnded, setIsGameEnded] = useState(defaultParamsForGame.isGameEnded);
    const [isDraw, setIsDraw] = useState(defaultParamsForGame.isDraw);
    const [field, setField] = useState(defaultParamsForGame.field);

    const fieldProps = {
        state: {
            field,
            currentPlayer,
            isGameEnded,
            isDraw
        },
        handlers: {
            setField,
            setCurrentPlayer,
            setIsGameEnded,
            setIsDraw
        }
    };

    const informationProps = {
        state: {
            currentPlayer,
            isGameEnded,
            isDraw,
            field
        },
        handlers: {
            setCurrentPlayer,
            setIsGameEnded,
            setIsDraw,
            setField
        },
        extraParams: {
            defaultParamsForGame
        }
    };


    return (<div className={styles.mainBlock}>
        <h1 style={{textAlign: 'center'}}>Игра в крестики и нолики</h1>
        <div className={styles.fieldBlock}>
            <Field {...fieldProps}/>
        </div>
        <div className={styles.informationBlock}>
            <Information {...informationProps}/>
        </div>
    </div>)
}