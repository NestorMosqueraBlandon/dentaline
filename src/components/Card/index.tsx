import React from 'react'
import styles from './Card.module.css'

interface Props{
    title: string;
    labels: string[];
}

const Card = ({ title, labels } : Props) => {
  return (
    <div className={styles.electrod}>
    <h4>{title}</h4>
    {labels.map((label) => (
        <p>{label}</p>
    ))}
</div>
  )
}

export default Card