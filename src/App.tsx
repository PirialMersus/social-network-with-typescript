import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from './components/Music/Music';
import Settings from "./components/Settings/Settings";
import {RootStateType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";


type AppPropsType = {
    state: RootStateType
}

const App = (props: AppPropsType) => {
    return (
        <HashRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}
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
                                <UsersContainer/>
                        }
                    />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={Login}/>

                </div>

            </div>
        </HashRouter>
    );
}

export default App;
