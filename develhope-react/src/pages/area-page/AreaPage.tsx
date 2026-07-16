import { createContext } from "react";
import { Header } from "../../components/header/Header";
import { AreaRecap } from "../../features/area/area-recap/AreaRecap";
import { MyCourse } from "../../features/area/my-course/MyCourse";
import "./AreaPage.css";
import { useAppSelector } from "../../store/store";
import { Chatbot } from "../../features/area/chatbot/Chatbot";
import { useDispatch } from "react-redux";
import { areaState } from '../../store/area.state';

export const UserFullNameContext = createContext("");

export function AreaPage() {

    const area = useAppSelector(state => state.area)

    const dispatch = useDispatch()

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
            <Chatbot open={area.isChatbotOpen} onClick={() => {dispatch(areaState.actions.toggleChatbot())}}></Chatbot>
        </UserFullNameContext.Provider>
        </>
    )
}