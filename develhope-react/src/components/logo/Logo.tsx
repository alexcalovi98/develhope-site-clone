import { logo } from "../../utils/ImageUtil"

export function Logo() {
    return (
        <>
        <img className="logo-desktop" src={logo} alt="Logo di Develhope" width="200" />
        {/* <img className="logo-mobile" src="images/develhope_icon.png" alt="Logo di Develhope" width="35" />*/}
        </>
    )
}