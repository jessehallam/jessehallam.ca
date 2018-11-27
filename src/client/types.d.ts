declare module '*.json'

declare namespace config {
    interface HomeInfo {
        name: string
        href?: string
        value: string
    }

    interface Social {
        icon: string
        title: string
        href: string
    }

    interface HomeConfig {
        info: HomeInfo[]
        resume: string
        social: Social[]
        summary: string
    }

    interface SkillSection {
        name: string
        tags: string[]
        description: string[]
    }

    interface SkillsConfig {
        sections: SkillSection[]
    }

    interface ProjectMeta {
        [key: string]: { href: string, text: string }
    }

    interface CarouselSlide {
        src: string
    }

    interface Project {
        name: string
        description: string[]
        meta: ProjectMeta
        tags: string[]
        carousel?: {
            slides: CarouselSlide[]
        }
    }
}

interface JQuery {
    owlCarousel(options: any)
}

// interface IProjectData extends Array<IProject> {

// }

// interface HRef {
//     href: string
//     text: string
// }

// interface IProject {
//     name: string
//     description: string | Array<string>
//     meta: {
//         [key: string]: HRef
//     }
//     tags: Array<string>
//     carousel: {
//         slides: Array<{ src: string }>
//     }
// }

// interface ISkill {
//     name: string
//     description: Array<string>
//     tags: Array<string>
// }

// declare module '*.json' {
//     const value: any;
//     export default value;
// }