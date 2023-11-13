import './style.css';

const Project = ({title, skills, img, gitHubLink }) => {
  return (
    <li className="project">
      <a href={gitHubLink}>
        <img src={img} alt="Project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </a>
    </li>
  );
};

export default Project;
