import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import GameDetails from './components/game-details/GameDetails';
import Login from './components/login/Login';
import Register from './components/register/Register';


function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({})

// _id: 
// accessToken: 
// email: 
// username:

    const loginSubmitHandler = async (values) => {

        const result = await authService.login(values.email, values.password);

        setAuth(result)

        navigate(Path.Home);
    }

    const values = {
        loginSubmitHandler, 
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.username
    }

    return (
        <AuthContext.Provider value={values}>
            <div id="box">
                <Header />

                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path="/games" element={<GameList />} />
                    <Route path="/games/create" element={<GameCreate />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/games/:gameId" element={<GameDetails />} />
                </Routes>
            </div>
        </AuthContext.Provider>
    )
}

export default App;
