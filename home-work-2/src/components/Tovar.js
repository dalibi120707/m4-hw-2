import styles from "./Tovar.module.css";
import { useState } from "react";

function Tovar ({ products }) {
    const [count, setCount] = useState(0);
    const plus = () => {
        setCount(count + 1);
        console.log(count);
    };
    const minus = () => {
        setCount(count - 1);
        console.log(count);
    };
    return (
        <div className={styles.tovarParent}>
            <h2>{products.name}</h2>
            <p>{products.price}</p>
            <div>
                <img src={products.image}/>
            </div>
            <div className={styles.btnTovar}>
                <button onClick={minus}>-</button>
                <span>{count}</span>
                <button onClick={plus}>+</button>
            </div>
        </div>
    )
}

export default Tovar;