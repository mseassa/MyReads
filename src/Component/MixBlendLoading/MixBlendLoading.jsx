import React from 'react'
import styles from './MixBlendLoading.module.css'

function MixBlendLoading() {
    return (
        <>
        <div className={`${styles.mixBlend} shelf-bg`}>
            <span>Loading</span>
        </div>
        </>
    )
}

export default MixBlendLoading