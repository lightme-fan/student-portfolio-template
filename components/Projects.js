import React from 'react'
import ProjectTemplate from './ProjectTemplate'
import portfolioData from '../data/portfolioData'
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function Projects() {
    const cssData = portfolioData.filter(item => item.type === '#HTML #CSS #responsive')
    const jsData = portfolioData.filter(item => item.type === 'js')
    const reactData = portfolioData.filter(item => item.type === 'react')

    return (
        <Router>
            <section>
                <h2>Project</h2>
                <button><Link to='/'>Html and CSS</Link></button>
                <button><Link to='/js'>Javascript</Link></button>
                <button><Link to='/react'>React</Link></button>
            </section>
            <Switch>
                <Route exact path='/'>
                    <div className='project--list'>                
                        {cssData.map(item => 
                            <ProjectTemplate key={item.id} {...item}/>
                        )}
                    </div>
                </Route>

                <Route path='/js'>
                    <div className='project--list'>                
                        {jsData.map(item => 
                            <ProjectTemplate key={item.id} {...item}/>
                        )}
                    </div>
                </Route>

                <Route path='/react'>
                    <div className='project--list'>                
                        {reactData.map(item => 
                            <ProjectTemplate key={item.id} {...item}/>
                        )}
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default Projects
