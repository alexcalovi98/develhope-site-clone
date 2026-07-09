import { useContext } from 'react'
import { courseStatusIcon, courseCodeIcon, courseVideoIcon } from '../../../utils/ImageUtil'
import { UserFullNameContext } from '../../../pages/area-page/AreaPage'

type MyCourseProps = {
    label: string,
    videosNumber: number, 
    completedExercises: number
    maxExercises: number,
    courseStart: string,
    completedPercentage: number
}

export function MyCourse  ({label, videosNumber, completedExercises, maxExercises, courseStart, completedPercentage } : MyCourseProps ) {
    const fullName = useContext(UserFullNameContext)

    return (
       
       <div className="user-courses__card">
        <h2>{label}</h2>
            <div className="user-courses__card-stats">
                <div className="user-courses__card-stats__top">
                    <div className="user-courses__card-stats__value">
                        <img className='course-img' src={courseVideoIcon} width="18" height= "18" /> 
                        <span className="span-stats">{videosNumber} video</span>
                    </div>
                    <div className="user-courses__card-stats__value">
                        <img className='course-img' src={courseCodeIcon} width="18" height= "18" /> 
                        <span className="span-stats">{completedExercises}/{maxExercises} esercizi</span>
                    </div>
                </div>    
                <div className="user-courses__card-stats__bottom">  
                    <div className="user-courses__card-stats__value">  
                        
                           <img className='course-img' src={courseStatusIcon} width="18" height= "18" /> 
                            <span className="span-stats">Iniziato: {courseStart}</span>
                        
                    </div>
                </div>
            </div>
                <div className="user-courses__card-footer-container">
                <div className="progress-container">
                    <span>{completedPercentage}% completato</span>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: completedPercentage + "%"}}></div>
                        </div>
                    </div>
                <button className ="card-btn">Continua Corso</button>
                </div>
                <div style={{fontSize: "10px"}}>Hey {fullName}! Stai andando bene!</div>
            </div>
            
        
    )
}

