import { Mail, Phone, MapPin, Linkedin, Award, Calendar } from 'lucide-react';

const Profile = ({ profile, education }) => {
  return (
    <section id="profile" className="section profile-section">
      <div className="container">
        <div className="profile-header">
          <div className="profile-avatar">
            {profile.photo_url ? (
              <img 
                src={profile.photo_url} 
                alt={profile.full_name}
                className="avatar-image"
              />
            ) : (
              <div className="avatar-circle">
                <span className="avatar-text">{profile.full_name.charAt(0)}</span>
              </div>
            )}
          </div>
          
          <div className="profile-content">
            <h1 className="profile-name">{profile.full_name}</h1>
            <p className="profile-title">{profile.headline}</p>
            <div className="profile-meta">
              <span className="meta-item">{profile.nim}</span>
              <span className="divider">•</span>
              <span className="meta-item">{profile.prodi}</span>
              <span className="divider">•</span>
              <span className="meta-item">Angkatan {profile.angkatan}</span>
            </div>
          </div>
        </div>

        <div className="profile-bio">
          <p>{profile.short_bio}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-item">
            <Mail size={18} />
            <span>{profile.email}</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>{profile.phone}</span>
          </div>
          <div className="contact-item">
            <MapPin size={18} />
            <span>{profile.location}</span>
          </div>
          <div className="contact-item">
            <Linkedin size={18} />
            <a href={profile.portfolio_url} target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="education-section">
          <h2 className="section-title">
            <Award size={24} />
            Education
          </h2>
          <div className="education-list">
            {education.map((edu) => (
              <div key={edu.id} className="education-card">
                <div className="edu-header">
                  <div>
                    <h3 className="edu-institution">{edu.institution}</h3>
                    <p className="edu-degree">{edu.degree} - {edu.major}</p>
                  </div>
                  <div className="edu-gpa">GPA: {edu.gpa}</div>
                </div>
                <div className="edu-period">
                  <Calendar size={16} />
                  <span>{edu.start_year} - {edu.end_year}</span>
                </div>
                <p className="edu-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;