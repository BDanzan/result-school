import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
  const [steps] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFirstIndex, setIsFirstIndex] = useState(true);
  const [isLastIndex, setIsLastIndex] = useState(false);

  const buttonBack = () => {
    setIndex(activeIndex - 1);
  };
  const buttonForward = () => {
    setIndex(activeIndex + 1);
  };
  const buttonRepeat = () => {
    setIsFirstIndex(true);
    setIsLastIndex(false);
    setIndex(0);
  };

  const setIndex = (index) => {
    if(index !== 0 && index !== steps.length - 1) {
      setIsFirstIndex(false);
      setIsLastIndex(false);
    }

    if(index === 0) {
      setIsFirstIndex(true);
    }

    if(index === steps.length - 1) {
      setIsLastIndex(true);
    }

    setActiveIndex(index);
  }

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
            {steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
            {steps.map((step, index) => (
              <li className={styles['steps-item'] + ' ' + (activeIndex === index ? styles.active: activeIndex < index ? styles.done : '')} key={step.id}>
                <button className={styles['steps-item-button']} onClick={() => setIndex(index)}>{index + 1}</button>
                {step.title}
              </li>
            ))}
          </ul>
				</div>
        <div className={styles['buttons-container']}>
						<button className={styles.button} disabled={isFirstIndex} onClick={() => buttonBack()}>Назад</button>
						{!isLastIndex && <button className={styles.button} onClick={() => buttonForward()}>Далее</button>}
            {isLastIndex && <button className={styles.button} onClick={() => {buttonRepeat()}}>Начать с начала</button>}
					</div>
			</div>
		</div>
	);
};
