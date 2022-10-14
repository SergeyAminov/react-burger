import { BurgerIcon, MenuIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo";

import appHeaderStyle from "./app-header.module.css";

export default function AppHeader(){
    return(
        <header className={appHeaderStyle.header}>
            <div className={appHeaderStyle.navbar}>

                <div className={appHeaderStyle.menuButtons}>
                    <button className={`${appHeaderStyle.menuButton} ${appHeaderStyle.menuButtonActive}`}>
                        <BurgerIcon type="primary"/>
                        Конструктор
                    </button>

                    <button className={appHeaderStyle.menuButton}>
                        <MenuIcon type="secondary"/>
                        <span className={appHeaderStyle.orderFeed}>Лента заказов</span>
                    </button>
                </div>

                <div className={appHeaderStyle.logo}>
                    <Logo/>
                </div>
                
                <button className={appHeaderStyle.profile}>
                    <ProfileIcon type="secondary" />
                    <span className={appHeaderStyle.orderFeed}>Личный кабинет</span>
                </button>
            </div>
        </header>
    );
}
