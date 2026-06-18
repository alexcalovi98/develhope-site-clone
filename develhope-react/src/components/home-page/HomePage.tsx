import { Header } from "../header/Header"
import { HomeBanner } from "../home-banner/HomeBanner"

export function HomePage() {
    return (
        <>
        <HomeBanner />
        <Header home={true} />
        {/* <HelloWorld name="Alex" surname="Calovi" course="Mobile Development"/>
        <HelloWorld name="Rosario" surname="Floridia" age={27}/>
        <HelloWorld name="Federico Maria" surname="Calato" age={23}/> */}
        </>
    )
}