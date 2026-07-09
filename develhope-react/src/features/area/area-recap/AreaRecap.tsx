import { useContext } from "react";
import type { UserStats } from "../../../types/user-stats";
import "./AreaRecap.css";
import { UserFullNameContext } from "../../../pages/area-page/AreaPage";

type AreaRecapProps = {
    stats?: UserStats[]
}

export function AreaRecap({ stats = [] }: AreaRecapProps) {
    const fullName = useContext(UserFullNameContext)

    return (
        <div className="user-recap">
            <span className="user-name">{fullName}</span>
            <br/><br/>
            <div className="user-stats-container">
                {
                    stats.map((stat, index) =>
                        <div className="user-stats" key={index}>
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