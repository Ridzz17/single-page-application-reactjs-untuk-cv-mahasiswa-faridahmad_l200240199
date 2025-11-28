import { Briefcase } from 'lucide-react';
const Experiences = ({ experiences }) => {
    const formatDate = (dateString) => {
      if (!dateString) return 'Present';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    };
  
    const getTypeLabel = (type) => {
      const labels = {
        organization: 'Organization',
        project: 'Project',
        internship: 'Internship',
        work: 'Work'
      };
      return labels[type] || type;
    };
  
    const sortedExperiences = [...experiences].sort((a, b) => {
      if (a.is_current !== b.is_current) return a.is_current ? -1 : 1;
      return new Date(b.start_date) - new Date(a.start_date);
    });
  
    return (
      <section id="experiences" className="section experiences-section">
        <div className="container">
          <h2 className="section-title">
            <Briefcase size={24} />
            Work Experience & Projects
          </h2>
          
          <div className="timeline">
            {sortedExperiences.map((exp, index) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  {index !== sortedExperiences.length - 1 && <div className="marker-line"></div>}
                </div>
                
                <div className="experience-card">
                  <div className="exp-header">
                    <div className="exp-main">
                      <h3 className="exp-title">{exp.title}</h3>
                      <p className="exp-organization">{exp.organization}</p>
                      <div className="exp-meta">
                        <span className="exp-type">{getTypeLabel(exp.experience_type)}</span>
                        <span className="divider">•</span>
                        <span className="exp-period">
                          {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
                        </span>
                        {exp.is_current && <span className="current-badge">Current</span>}
                      </div>
                    </div>
                  </div>
                  
                  <p className="exp-description">{exp.description}</p>
                  
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Experiences;