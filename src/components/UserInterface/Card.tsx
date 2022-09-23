import { ReactNode } from 'react'

import styles from './Card.module.css'

interface CardProps {
  children: ReactNode
  className: string
}
const Card = ({ children, className }: CardProps) => {
  const classes = `${styles.card} ${className}`
  return <div className={classes}>{children}</div>
}

export default Card
