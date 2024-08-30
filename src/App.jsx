import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

import styles from "./App.module.css"

export default function App(){

  return(
    <div className={styles.App}>
     <Header/>
     <Main>
        <form action="">
          <input type="text" />
          <button>+</button>
        </form>
        {/* <TaskList/> */}
     </Main>
     <Footer autor="Defendi"/>
    </div>
  )
}
