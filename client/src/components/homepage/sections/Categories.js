import React from 'react';
import styles from "../styles/Categories.module.css";

export const Categories = () => {
  return (
    <>
        <div className={styles.container}>
                <div >
                    <div style={{backgroundColor: "rgb(190, 190, 190)"}}>
                        CATS
                    </div>
                </div>
                <div>
                    <div style={{backgroundColor: "rgb(190, 190, 190)"}}>
                        DOGS
                    </div>
                </div>
                <div>
                    <div style={{backgroundColor: "rgb(190, 190, 190)"}}>
                        TREATS
                    </div>
                </div>
            </div>
    </>
  )
}
