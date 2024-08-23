import styles from "./Footer.module.css"

export default function Footer(props){

    let { autor } = props
    let ano = new Date().getFullYear();

    return(
        <div className = {styles.Footer}>
            React - {autor} - {ano}
        </div>
    )
}