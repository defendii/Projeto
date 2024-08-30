import styles from './Main.module.css'

export default function Main (props){
    let {chlidren} = props
    return(
        // <div className={styles.Main}>
        //     {chlidren}
        // </div>
        <div className={styles.Main}>
            <div className={styles.adicionar}>
                <input type="text" />
                <button>+</button>
            </div>
            <div className={styles.itens}>
                <div className={styles.item1}>
                    <p>item 1</p>
                    <button>X</button>
                </div>
            </div>
            
        </div>
    )
}