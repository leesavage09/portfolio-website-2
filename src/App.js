import React, { Component} from "react";
import {hot} from "react-hot-loader";
import styles from './app.module'

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <h1 className={styles.red}> Hello, World!!</h1>
//       </div>
//     );
//   }
// }

function App() {
  return <h2 className={styles.red}>hello world!</h2>
}

export default hot(module)(App);