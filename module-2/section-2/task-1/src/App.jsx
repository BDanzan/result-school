import style from './App.module.css'
import {useState} from 'react';

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);


  const onInputButtonClick = () => {
    const promptValue = window.prompt();
    if(promptValue.length < 3) {
      window.alert('Значение которое вы ввели, меньше 3 символов.')
      setError(true);
      setValue('');
      return;
    }
    
    setError(false);
    setValue(promptValue);
  };

  const onAddButtonClick = () => {
    setList(...list, {id: list.length, value: value, date: getFormatDate()});
  };

  const getFormatDate = () => {
    const date = new Date();

    const day = date.getDate()
    const month = date.getMonth();
    const year = date.getFullYear();

    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    const seconds = date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds();

    return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ":" + seconds
  };

  return (
    <div className={style.app}>
    <h1 className={style['page-heading']}>Ввод значения</h1>
    <p className={style['no-margin-text']}>
      Текущее значение <code>value</code>: "<output className={style['current-value']}>{value}</output>"
    </p>
    {error && <div className={style.error}>Введенное значение должно содержать минимум 3 символа</div>}
    <div className={style['buttons-container']}>
      <button className={style.button} onClick={onInputButtonClick}>Ввести новое</button>
      <button className={style.button} disabled={value === ''} onClick={onAddButtonClick}>Добавить в список</button>
    </div>
    <div className={style['list-container']}>
      <h2 className={style['list-heading']}>Список:</h2>
      {list.length === 0 && <p className={style['no-margin-text']}>Нет добавленных элементов</p>}
      <ul className={style.list}>
        {list.map((item) => (
         <li className={style['list-item']} key={item.id}>{item.value} {item.date}</li> 
        ))}
      </ul>
    </div>
  </div>
  )
}

export default App
