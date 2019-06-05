import React from "react";
import Routes from "./routes";

import Header from "./components/Header";
//import Main from "./pages/main";

import "./styles.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello RocketSeat</h1>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello RocketSeat</h1>
//     </div>
//   );
// }

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
