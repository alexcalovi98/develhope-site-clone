import "./CourseCard.css";

type CourseCardProps = {
    image: string;
    title: string;
    bulletPoints: string[],
    nextClass: Date,
    discoverUrl: string
}

export function CourseCard({ image, title, bulletPoints, nextClass, discoverUrl }: CourseCardProps) {
    const formattedNextClassDate = nextClass.toLocaleDateString("it-IT")

    return (
        <div className="course-card">
            <img src={image} />
            <div className="course-card-content">
                <h2>{title}</h2>
                <ul>
                    <li>{bulletPoints[0]}</li>
                    <li>{bulletPoints[1]}</li>
                </ul>
                <div className="next-class">Prossima classe: {formattedNextClassDate}</div>
                <button onClick={() => window.location.href = discoverUrl}>
                    <span>Scopri di più</span>
                </button>
            </div>
        </div>
    )
}