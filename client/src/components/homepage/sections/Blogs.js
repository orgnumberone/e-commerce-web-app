import React from 'react';
import styles from "../styles/Blogs.module.css";

export const Blogs = () => {
    return (
        <>
            <div className={styles.blogsContainer} style={{marginTop: "70px"}}>Latest Blogs</div>
            <div className={styles.line}></div>
            <div className={styles.container}>
                <div >
                    <div>
                        Photo1
                    </div>
                </div>
                <div>
                    <div>
                        Photo2
                    </div>
                </div>
                <div>
                    <div>
                        Photo3
                    </div>
                </div>
            </div>
        </>
    )
}
