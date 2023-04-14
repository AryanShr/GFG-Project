import React, { useContext } from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { useNavigate, Link } from "react-router-dom";



const Header = () => {
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext)

    const handleLogOut = async (e) => {
        e.preventDefault();
        signOut(auth);


        navigate("/login");

    };

    return (
        <div className='navbar'>
            <img className='logoImg' src={require('../img/logo.png')} onClick={() => navigate("/")} />
            <div className="user">
                <button onClick={handleLogOut}>logout</button>
                <span>{currentUser.displayName}</span>

                <img src={currentUser.photoURL} alt="" />
            </div>
        </div>
    )
}

export default Header