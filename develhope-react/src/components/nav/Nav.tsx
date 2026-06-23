import { useState } from "react"

type MenuItem = {
    label: string;
    id: string;
}

export function Nav() {
    const [selected, setSelected] = useState("home")

    const menu: MenuItem[] = [
        { label: "Home", id: "home" },
        { label: "Corsi", id: "courses" },
        { label: "Progetti", id: "projects" },
        { label: "Chi siamo", id: "about-us" },
    ]

    return (
        <>
        <nav>
            {
                menu.map(item =>
                    <a 
                        key={item.id}
                        className={selected === item.id ? "underlined" : "" }
                        onClick={() => setSelected(item.id)}>{item.label}
                    </a>
                )
            }
        </nav>
        </>
    )
}