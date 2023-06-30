export namespace Frontend {
    // The basename.
    export const Basename = '/'

    // Router URLs.
    export namespace Url {
        export const Home = '/'
        export const Resume = '/homepage/resume'
        export const Works = '/homepage/works'
        export const Contact = '/homepage/contact'
    }

    // Page names.
    export type PageName = 'home' | 'resume' | 'works' | 'contact'
    export const pageNameList: PageName[] = ['home', 'resume', 'works', 'contact']
}