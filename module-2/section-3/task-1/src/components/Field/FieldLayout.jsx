import style from "./FieldLayout.module.css";


export const FieldLayout = ({field, clickField}) => {

    return (
        <>
            {field.map((f, index) => (
                <div className={style.field} key={index} onClick={() => (clickField(index))}>{f}</div>
            ))}
        </>
    );
};
