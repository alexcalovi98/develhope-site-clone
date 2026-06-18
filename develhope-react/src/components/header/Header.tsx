import { Nav } from "../nav/Nav";
import { RegistrationButton } from "../registration-button/RegistrationButton";
import develhopeLogo from '../../assets/develhope.png'
import "./Header.css";

export function Header() {
    return (
        <>
        <div className="header">
            <img className="logo-desktop" src={develhopeLogo} alt="Logo di Develhope" width="200" />
            {/* <img className="logo-mobile" src="images/develhope_icon.png" alt="Logo di Develhope" width="35" />*/}
            <Nav />
            <RegistrationButton />
        </div>
        </>
    )
}