import { CourseCard } from "../course-card/CourseCard"
import { Header } from "../header/Header"
import { HomeBanner } from "../home-banner/HomeBanner"

export function HomePage() {
    const coursesBulletPoints = ["100% Online", "Inizia e studia quando vuoi"]
    const now = new Date()

    return (
        <>
        <HomeBanner />
        <Header home={true} />
        <CourseCard
            image=""
            title="Corso Live AI-Powered"
            bulletPoints={coursesBulletPoints}
            nextClass={now}
            discoverUrl="" />
        
        {/* <HelloWorld name="Alex" surname="Calovi" course="Mobile Development"/>
        <HelloWorld name="Rosario" surname="Floridia" age={27}/>
        <HelloWorld name="Federico Maria" surname="Calato" age={23}/> */}
        </>
    )
}