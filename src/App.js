import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Profile from './Component/Profile/Profile';
import SignUp from './Component/SignUp/SignUp';
import Header from './Component/Header';



const App= ()=> {
   return (<>
    
   <BrowserRouter>
       <Header  />
        <Switch>
        <Route  path='/' exact >
        <SignUp />
        </Route>
        <Route  path='/signUp'>
        <SignUp/>
        </Route>
       <Route path='/profile'>
       <Profile  />
       </Route>
       </Switch>
     </BrowserRouter>
    </>
  );
}

export default App;
