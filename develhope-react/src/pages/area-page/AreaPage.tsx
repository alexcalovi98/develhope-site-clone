import { createContext } from "react";
import { Header } from "../../components/header/Header";
import { AreaRecap } from "../../features/area/area-recap/AreaRecap";
import { MyCourse } from "../../features/area/my-course/MyCourse";
import { useArea } from "../../hooks/useArea";
import "./AreaPage.css";

export const UserFullNameContext = createContext("");

export function AreaPage() {

    const [ area ] = useArea()

    return (
        <>
        <UserFullNameContext.Provider value={area.fullname}>
            <Header home={false} />
            <br /><br />
            <AreaRecap stats={area.stats}/>
            {
                area.courses.map(course => 
                    <MyCourse
                        key={course.id}
                        label={course.label}
                        videosNumber={course.videosNumber}
                        completedExercises={course.completedExercises}
                        maxExercises={course.maxExercises}
                        completedPercentage={course.completedPercentage}
                        courseStart={course.start} />
                )
            }
        </UserFullNameContext.Provider>
        </>
    )
}