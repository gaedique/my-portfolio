export interface NavItem {
    href: string;
    label: string;
    external?: boolean;
}

export const navigationItems: NavItem[] = [
    {
        href: "/projects",
        label: "Projects"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/contact",
        label: "Contact"
    }
]