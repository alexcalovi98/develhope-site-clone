import type { MenuItem } from "../../types/menu-item";

type NavItemProps = {
    item: MenuItem;
    selected: string;
    itemClicked: () => void;
}

export function NavItem({ item, selected, itemClicked } : NavItemProps) {

    return (
        <a 
            className={selected === item.id ? "underlined" : "" }
            onClick={itemClicked}>{ item.label }
        </a>
    )
}