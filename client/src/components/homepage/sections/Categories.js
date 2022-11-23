import React from 'react';
import styles from "../styles/Categories.module.css";

export const Categories = () => {
  return (
    <>
        <div className={styles.container} data-testid="container">
                <div data-testid="container1">
                    <div data-testid="cats">
                        CATS
                    </div>
                </div>
                <div data-testid="container2">
                    <div data-testid="dogs">
                        DOGS
                    </div>
                </div>
                <div data-testid="container3">
                    <div data-testid="treats">
                        TREATS
                    </div>
                </div>
            </div>
    </>
  )
}
