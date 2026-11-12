// One entry per project. `home` and `work` control where each card appears.
export type Project = {
    slug: string
    href: string
    title: string // Work page card title
    homeTitle?: string // Home grid title, if different
    blurb: string
    image: string
    alt: string
}

export const projects: Project[] = [
    {
        slug: "smn",
        href: "/work/smn",
        title: "Spilt Milk Nannies",
        homeTitle: "Streamlining the Digital Caregiver Workflow",
        blurb: "Redesigning the nanny side of a childcare booking platform to give caregivers more agency.",
        image: "/images/card-smn.jpg",
        alt: "Five phone screens from the Spilt Milk Nannies redesign",
    },
    {
        slug: "pg",
        href: "/work/pg",
        title: "Procter & Gamble",
        blurb: "Design research and strategy to uncover new opportunities for product innovation.",
        image: "/images/card-pg.jpg",
        alt: "P&G logo with household products",
    },
    {
        slug: "sprout",
        href: "/work/sprout",
        title: "Sprout",
        blurb: "A self-care app with a physical plant companion that makes small daily wellness goals feel rewarding.",
        image: "/images/card-sprout-plant.jpg",
        alt: "The Sprout app on two phones beside a potted monstera",
    },
    {
        slug: "turtlup",
        href: "/work/turtlup",
        title: "TurtlUp",
        blurb: "A posture-sensing wearable and web app that turns unconscious slouching into gentle, real-time awareness.",
        image: "/images/card-turtlup.jpg",
        alt: "The TurtlUp web app on a laptop, showing posture statistics",
    },
]

// Order on the Work page (Home uses the array order above).
export const workOrder = ["pg", "smn", "sprout", "turtlup"]

export const links = {
    resume: "https://drive.google.com/file/d/1Mk_Z4-TMrCxXZYJlwGhiEVzxTm4-wct0/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/sophiatang23",
}
