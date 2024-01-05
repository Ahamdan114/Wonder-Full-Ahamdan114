import { introductionPage } from "../assets/profile-user.js";
import "./Skills.css"

const Skills = () => {
    const skills = introductionPage.skills;

    return (
        <div className="skills-container">
            <h1 className="skills-title">Tech Toolkit |</h1>
                <ul  className="skills-list">
                    {skills.map((Skill, index) => (
                        <Skill key={index} className="icon" />
                    ))}
                </ul>
        </div>
    );
};

export default Skills;
