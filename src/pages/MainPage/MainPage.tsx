/* eslint-disable i18next/no-literal-string */
import { FC } from 'react'
import styles from './MainPage.module.scss'

interface MainPageProps{

}
export const MainPage:FC<MainPageProps> = () => {
  return (
    <div className={styles.mainpage}>MainPage</div>
  )
}