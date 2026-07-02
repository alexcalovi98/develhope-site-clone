import { useEffect, useState } from "react"
import type { Course } from "../types/course"
import type { UserStats } from "../types/user-stats"
import { getUser } from "../services/user_service"
import { getStats } from "../services/stats_service"
import { getCourse } from "../services/courses_service"

export function useArea() {
    const [fullname, setFullname] = useState("")
    const [stats, setStats] = useState<UserStats[]>([])
    const [courses, setCourses] = useState<Course[]>([])

    function fetchArea() {
        getUser().then(user => setFullname(user.name + " " + user.surname))
        getStats().then(stats => setStats(stats))
        getCourse().then(courses => setCourses(courses))
    }

    useEffect(fetchArea, [])

    return [
        {
            fullname: fullname,
            stats: stats,
            courses: courses
        }
    ] as const
}