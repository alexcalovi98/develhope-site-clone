import { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { AreaRecap } from "../../features/area/area-recap/AreaRecap";
import { MyCourse } from "../../features/area/my-course/MyCourse";
import type { UserStats } from "../../types/user-stats";
import { getUser } from "../../services/user_service";
import "./AreaPage.css";
import { getStats } from "../../services/stats_service";
import { getCourse } from "../../services/courses_service";
import type { Course } from "../../types/course";

export function AreaPage() {
    const [fullname, setFullname] = useState("")
    const [stats, setStats] = useState<UserStats[]>([])
    const [courses, setCourses] = useState<Course[]>([])

    useEffect(() => {
        getUser().then(user => setFullname(user.name + " " + user.surname))
        getStats().then(stats => setStats(stats))
        getCourse().then(courses => setCourses(courses))
    }, [])

    return (
        <>
        <Header home={false} />
        <br /><br />
        <AreaRecap name={fullname} stats={stats}/>
        {
            courses.map(course => 
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
        </>

    )
}