// One entry per project. `home` and `work` control where each card appears.
export type Project = {
    slug: string
    href: string
    title: string // Work page card title
    homeTitle?: string // Home grid title, if different
    blurb: string
    image: string
    alt: string
    tags: string[] // Home card chips
    outcome: string // Home card headline
    subtitle: string // Home card line under the headline
    meta: string // short type/year label
    descriptor: string // Home card title: the project and what it is
    tagline?: string // Home card: "Name — tagline" with the year; the blurb then shows on hover
    year?: string
    phone?: { mp4: string; webm: string; poster: string; bg: string } // Home card: a screen recording in a translucent phone
}

export const projects: Project[] = [
    {
        slug: "smn",
        href: "/work/smn",
        title: "Spilt Milk Nannies",
        homeTitle: "Streamlining the Digital Caregiver Workflow",
        blurb: "Redesigning the nanny side of a childcare booking platform to give caregivers more agency.",
        image: "/images/card-smn-grain.jpg",
        alt: "Five phone screens from the Spilt Milk Nannies redesign",
        tags: ["Client project", "UX research", "Mobile"],
        outcome: "40% fewer scheduling steps for nannies",
        subtitle: "Spilt Milk Nannies, a childcare booking platform",
        meta: "Client 2026",
        descriptor: "Spilt Milk Nannies Caregiver Experience",
        tagline: "Connecting the moments between bookings",
        year: "2026",
        phone: {
            mp4: "/video/smn/card-screen.mp4",
            webm: "/video/smn/card-screen.webm",
            poster: "/images/smn/card-screen-poster.jpg",
            bg: "#bfe5e6",
        },
    },
    {
        slug: "pg",
        href: "/work/pg",
        title: "Procter & Gamble",
        blurb: "Design research and strategy to uncover new opportunities for product innovation.",
        image: "/images/card-pg.jpg",
        alt: "P&G logo with household products",
        tags: ["Design research", "Strategy"],
        outcome: "New opportunities for air care innovation",
        subtitle: "Procter & Gamble, product innovation",
        meta: "Research",
        descriptor: "P&G Air Care Innovation",
    },
    {
        slug: "scribble",
        href: "/work/scribble",
        title: "Scribble",
        blurb: "Turn scattered thoughts into clear next steps.",
        image: "/images/card-sprout-plant.jpg",
        alt: "The Sprout app on two phones beside a potted monstera",
        tags: ["UX design", "Mobile", "Hardware"],
        outcome: "Turn scattered thoughts into clear next steps",
        subtitle: "Scribble, an AI planning app",
        meta: "Academic 2025",
        descriptor: "Scribble AI Planning App",
    },
    {
        slug: "turtlup",
        href: "/work/turtlup",
        title: "TurtlUp",
        blurb: "A posture-sensing wearable and web app that turns unconscious slouching into gentle, real-time awareness.",
        image: "/images/card-turtlup.jpg",
        alt: "The TurtlUp web app on a laptop, showing posture statistics",
        tags: ["UX engineering", "Web app", "Wearable"],
        outcome: "Real-time posture feedback you can tune",
        subtitle: "TurtlUp, a posture-sensing wearable",
        meta: "Hardware 2025",
        descriptor: "TurtlUp Posture Wearable",
    },
]

// Order on the Work page (Home uses the array order above).
export const workOrder = ["pg", "smn", "scribble", "turtlup"]

export const links = {
    resume: "https://drive.google.com/file/d/1QOjQgCnON-LXrwcXECyTWqXfQvppSQKT/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/sophiatang23",
}
