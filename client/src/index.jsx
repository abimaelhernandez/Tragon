import React from 'react';
import {render} from 'react-dom';
import App from './App';

// class App extends React.Component {
//   render(){
//     return(
//       <BrowserRouter>
//         <MuiThemeProvider>
//           <Route path="/" component={Primarylayout} />
//         </MuiThemeProvider>
//       </BrowserRouter>
//   )}
// };


render(<App/>, document.getElementById('app'));
