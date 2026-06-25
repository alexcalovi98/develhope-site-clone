import type { UserStats } from "../../../types/user-stats";
import "./AreaRecap.css";

type AreaRecapProps = {
    name: string;
    stats?: UserStats[]
}

export function AreaRecap({ name, stats = [] }: AreaRecapProps) {
    return (
        <div className="user-recap">
            <span className="user-name">{name}</span>
            <br/><br/>
            <div className="user-stats-container">
                {
                    stats.map(stat =>
                        <div className="user-stats">
                            <span>{stat.value}/{stat.maxValue}</span>
                            <br/>
                            <span>{stat.label}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}