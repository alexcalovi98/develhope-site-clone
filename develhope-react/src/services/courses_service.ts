import axios from "axios";
import type { Course } from "../types/course.d.ts";
import { getAccessTokenFromLocalStorage } from "./auth_service.ts"

const API_URL = "https://develhope.alexcalovi.dev";

export function getCourse(): Promise<Course[]> {
    return axios.get(API_URL + "/api/courses", {
        headers: {
            "Authorization": "Bearer " + getAccessTokenFromLocalStorage().accessToken
        }
    })
    .then((response) => response.data)
    .then((json) => {
        return json.map((course: any) => {
            return {
                id: course.id,
                label: course.nome,
                videosNumber: course.numero_video,
                completedExercises: course.esercizi_completati,
                maxExercises: course.esercizi_disponibili,
                start: course.data_inizio,
                completedPercentage: Math.round((course.esercizi_completati / course.esercizi_disponibili) * 100)
            }
        })
    })
}
