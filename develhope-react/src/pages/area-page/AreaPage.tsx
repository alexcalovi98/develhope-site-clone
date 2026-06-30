import { Header } from "../../components/header/Header";
import { AreaRecap } from "../../features/area/area-recap/AreaRecap";
import { MyCourse } from "../../features/area/my-course/MyCourse";
import type { UserStats } from "../../types/user-stats";
import "./AreaPage.css";



export function AreaPage() {
    const userStats: UserStats[] = [
        { label: "Media voti esercizi", value: 8, maxValue: 10 },
        { label: "Esercizi completati", value: 74, maxValue: 120 },
    ]

    return (
        <>
        <Header home={false} />
        <br /><br />
        <AreaRecap name="Alex Calovi" stats={userStats}/>
        <MyCourse label="Full Stack Developer" videosNumber={42} completedExercises={20} maxExercises= {24} completedPercentage={75} courseStart="2025-11-18"/>
        </>

    )
}