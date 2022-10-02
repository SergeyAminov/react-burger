import { Component } from "react"

import { BurgerIcon, MenuIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo";

import navbarStyle from "./navbar.module.css";

export default class Navbar extends Component{
    render(){
        return(
            <div className={navbarStyle.navbar}>

                <div className={navbarStyle.menuButtons}>
                    <button className={`${navbarStyle.menuButton} ${navbarStyle.menuButtonActive}`}>
                        <BurgerIcon type="primary"/>
                        Конструктор
                    </button>

                    <button className={navbarStyle.menuButton}>
                        <MenuIcon type="secondary"/>
                        <span className={navbarStyle.orderFeed}>Лента заказов</span>
                    </button>
                </div>

                <div className={navbarStyle.logo}>
                    <Logo/>
                </div>
                
                <button className={navbarStyle.profile}>
                    <ProfileIcon type="secondary" />
                    <span className={navbarStyle.orderFeed}>Личный кабинет</span>
                </button>
            </div>
        );
    }
}