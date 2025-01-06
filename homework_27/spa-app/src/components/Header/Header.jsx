import ChangeColorButton from "../ChangeColorButton/ChangeColorButton";
import Link from "../Link/Link";

const Header = () => {
    return (
        <header className="header">
            <h1>Oleg Drobina</h1>
            <ul className = 'header__logo'>
                <li>
                    <Link href="/">Main</Link>
                </li>
                <li>
                    <Link href="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link href="/aboutme">About me</Link>
                </li>
            </ul>
            <ChangeColorButton />
        </header>
    )
}

export default Header;