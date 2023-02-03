import React from 'react';
import { NavLink } from 'react-router-dom';


export const NavBar = () =>{
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" class="index-link">index</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home" class="home-link">home</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}