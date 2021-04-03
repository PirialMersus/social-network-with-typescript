import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from './components/Music/Music';
import Settings from "./components/Settings/Settings";
import {RootStateType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from './components/Users/Users';


type AppPropsType = {
    state: RootStateType
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() =>
                        <Profile/>
                    }
                    />
                    <Route
                        path='/dialogs'
                        render={
                            () =>
                                <DialogsContainer/>
                        }
                    />
                    <Route
                        path='/users'
                        render={
                            () =>
                                <Users/>
                        }
                    />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>


                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
