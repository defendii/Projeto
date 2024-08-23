import styles from './Main.module.css'

export default function Main (props){
    let {chlidren} = props
    return(
        <div className={styles.Main}>
            {chlidren}
        </div>
    )
}