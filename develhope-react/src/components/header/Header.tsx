import { Countdown } from '../countdown/Countdown';
import { Logo } from '../logo/Logo';
import { Logout } from '../logout/Logout';
import { Nav } from "../nav/Nav";
import { RegistrationButton } from "../registration-button/RegistrationButton";
import "./Header.css";

type HeaderProps = {
    home?: boolean
}

export function Header({ home = true }: HeaderProps) {
    return (
        <div className="header">
            <Logo />
            { home && <Nav /> }
            { home && <RegistrationButton /> }
            { home && <Countdown /> }
            { !home && <Logout />}
        </div>
    )
}