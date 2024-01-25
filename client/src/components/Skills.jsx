import { introductionPage } from "../assets/profile-user.js";
import "./Skills.css"

const Skills = () => {
    const skills = introductionPage.skills;

    return (
        <div className="skills-container">
            <h1 className="skills-title">Tech Toolkit |</h1>
                <ul  className="skills-list">
                    {skills.map((Skill, index) => (
                        <span className="icon" key={index}>
                            <Skill />
                        </span>
                    ))}
                </ul>
        </div>
    );
};

export default Skills;
