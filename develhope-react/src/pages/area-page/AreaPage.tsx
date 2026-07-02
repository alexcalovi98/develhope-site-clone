import { Header } from "../../components/header/Header";
import { AreaRecap } from "../../features/area/area-recap/AreaRecap";
import { MyCourse } from "../../features/area/my-course/MyCourse";
import { Course } from "../../types/course";
import type { UserStats } from "../../types/user-stats";
import "./AreaPage.css";

export function AreaPage() {
    const userStats: UserStats[] = [
        { label: "Media voti esercizi", value: 8, maxValue: 10 },
        { label: "Esercizi completati", value: 74, maxValue: 120 },
    ]

    const courses: Course[] = [
        new Course("Full Stack Developer", 42, 20, 24, "2025-11-18"),
        new Course("Human Development", 10, 5, 7, "2025-11-18"),
    ]

    return (
        <>
        <Header home={false} />
        <br /><br />
        <AreaRecap name="Alex Calovi" stats={userStats}/>
        {
            courses.map(course => 
                <MyCourse
                    label={course.label}
                    videosNumber={course.videosNumber}
                    completedExercises={course.completedExercises}
                    maxExercises={course.maxExercises}
                    completedPercentage={course.completedPercentage()}
                    courseStart={course.start} />
            )
        }
        </>

    )
}