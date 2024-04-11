/* eslint-disable i18next/no-literal-string */
import { FC } from 'react'
import styles from './Favorites.module.scss'

interface FavoritesProps{

}
export const Favorites:FC<FavoritesProps> = () => {
  return (
    <div className={styles.favorites}>Favorites</div>
  )
}