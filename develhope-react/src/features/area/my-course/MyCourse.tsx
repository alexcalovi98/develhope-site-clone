import status from  '../../../assets/status.svg'
import video from  '../../../assets/video.svg'
import code from  '../../../assets/code.svg'

type MyCourseProps = {
label: string, 
videosNumber: number, 
completedExercises: number
maxExercises: number,
courseStart: string,
completedPercentage: number
}

export function MyCourse  ({label, videosNumber, completedExercises, maxExercises, courseStart, completedPercentage } : MyCourseProps ) {

    return (
       
       <div className="user-courses__card">
        <h2>{label}</h2>
            <div className="user-courses__card-stats">
                <div className="user-courses__card-stats__top">
                    <div className="user-courses__card-stats__value">
                        <img className='course-img' src={video} width="18" height= "18" /> 
                        <span className="span-stats">{videosNumber} video</span>
                    </div>
                    <div className="user-courses__card-stats__value">
                        <img className='course-img' src={code} width="18" height= "18" /> 
                        <span className="span-stats">{completedExercises}/{maxExercises} esercizi</span>
                    </div>
                </div>    
                <div className="user-courses__card-stats__bottom">  
                    <div className="user-courses__card-stats__value">  
                        
                           <img className='course-img' src={status} width="18" height= "18" /> 
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
                </div>
            
        
    )
}

