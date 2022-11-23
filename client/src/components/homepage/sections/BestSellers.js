import React from 'react'
import styles from "../styles/Latest.module.css";

export const BestSellers = () => {

    let array = [1, 2, 3, 4, 5];

    return (
        <>
            <div className={styles.title} style={{marginTop: "70px"}}>
                <div>Best Sellers</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.productArray}>
                {array.map((el, i) => {
                    return <div key={i}>
                        <div className={styles.product}>
                            <button className={styles.button}>ADD TO CART</button>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}
