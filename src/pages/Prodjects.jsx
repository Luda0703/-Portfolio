import Project from 'components/project/Project';
import { projects } from 'helpers/projectsList';

const Projects = () => {
    return (  
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                {projects.map(({title, skills, img, gitHubLink} , index) => {
                    return(
                        <Project key={index} title={title} skills={skills} img={img} gitHubLink={gitHubLink}/>
                    )
                })}
            </ul>
        </div>
    </main>
    );
}
 
export default Projects;