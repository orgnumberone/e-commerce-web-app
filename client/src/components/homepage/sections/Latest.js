import React, { useState } from 'react';
import styles from "../styles/Latest.module.css";


export const Latest = () => {

    const [buttonColor, setButtonColor] = useState(1);

    const changeFilterProducts = (number) => {
        setButtonColor(number);
    }

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            <div className={styles.title} style={{marginTop: "70px"}}>
                <div>Latest</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.categories}>
                <div style={{ fontWeight: "500" }} onClick={() => changeFilterProducts(1)} className={`${buttonColor === 1 ? styles.btnColor : null}`}>ALL</div>
                <div style={{ fontWeight: "500" }} onClick={() => changeFilterProducts(2)} className={`${buttonColor === 2 ? styles.btnColor : null}`}>CATS</div>
                <div style={{ fontWeight: "500" }} onClick={() => changeFilterProducts(3)} className={`${buttonColor === 3 ? styles.btnColor : null}`}>DOGS</div>
                <div style={{ fontWeight: "500" }} onClick={() => changeFilterProducts(4)} className={`${buttonColor === 4 ? styles.btnColor : null}`}>TREATS</div>
            </div>
            <div className={styles.productArray}>
                {array.map((el, i) => {
                    return <div key={i}>
                        <div className={styles.product}>{el}</div>
                    </div>
                })}
            </div>
        </>
    )
}
