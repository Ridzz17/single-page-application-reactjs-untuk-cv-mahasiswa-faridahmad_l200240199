import { Code } from 'lucide-react';
const Skills = ({ skills }) => {
    const getCategoryTitle = (category) => {
      const titles = {
        technical: 'Technical Skills',
        soft_skill: 'Soft Skills',
        business: 'Business Skills'
      };
      return titles[category] || category;
    };
  
    const groupedSkills = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {});
  
    return (
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">
            <Code size={24} />
            Skills & Expertise
          </h2>
          
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="skills-category">
              <h3 className="category-title">{getCategoryTitle(category)}</h3>
              <div className="skills-grid">
                {categorySkills.map((skill) => (
                  <div key={skill.id} className="skill-item">
                    <div className="skill-content">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level level-${skill.level}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress level-${skill.level}`}
                        style={{
                          width: skill.level === 'advanced' ? '90%' : 
                                 skill.level === 'intermediate' ? '70%' : '50%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;