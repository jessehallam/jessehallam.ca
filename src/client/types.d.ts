interface IProjectData extends Array<IProject> {

}

interface HRef {
    href: string
    text: string
}

interface IProject {
    name: string
    description: string | Array<string>
    meta: {
        [key: string]: HRef
    }
    tags: Array<string>
    carousel: {
        slides: Array<{ src: string }>
    }
}

interface ISkill {
    name: string
    description: Array<string>
    tags: Array<string>
}

interface JQuery {
    owlCarousel(options: any)
}

declare module '*.json' {
    const value: any;
    export default value;
}