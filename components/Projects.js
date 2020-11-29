import React from 'react'
import ProjectTemplate from './ProjectTemplate'

function Projects() {
    return (
        <>
            <section>
                <h2>Project</h2>
                <button>Html and CSS</button>
                <button>Vanilla Js</button>
                <button>React</button>
            </section>
            <div className='project--list'>
                <ProjectTemplate/>
                <ProjectTemplate/>
                <ProjectTemplate/>
            </div>
        </>
    )
}

export default Projects
