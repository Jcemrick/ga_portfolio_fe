const URL = 'https://portfolio-app-7se6.onrender.com'

export const projectsLoader = async ({request}) => {
    const response = await fetch(URL + '/projects')
    const projects = await response.json()
    return projects
}

export const aboutLoader = async ({request}) => {
    const response = await fetch(URL + '/about')
    const about = await response.json()
    return about
}