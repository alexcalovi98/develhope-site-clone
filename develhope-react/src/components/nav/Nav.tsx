import { useState } from "react"
import type { MenuItem } from "../../types/menu-item"
import { NavItem } from "./NavItem"

export function Nav() {
    const [selected, setSelected] = useState("home")

    const menu: MenuItem[] = [
        { label: "Home", id: "home" },
        { label: "Corsi", id: "courses" },
        { label: "Progetti", id: "projects" },
        { label: "Chi siamo", id: "about-us" },
    ]

    return (
        <nav>
            {
                menu.map(item => 
                    <NavItem
                        key={item.id}
                        item={item}
                        selected={selected}
                        itemClicked={() => setSelected(item.id)}
                    />
                )
            }
        </nav>
    )
}