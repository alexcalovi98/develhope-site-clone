import { Header } from "../../components/header/Header";
import { AreaRecap } from "../../features/area/area-recap/AreaRecap";
import type { UserStats } from "../../types/user-stats";

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
        </>
    )
}