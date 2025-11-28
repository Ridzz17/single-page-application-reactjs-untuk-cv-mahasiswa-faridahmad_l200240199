import dataMahasiswa from './data/dataMahasiswa.json';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import './App.css';

export default function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <span className="brand-initial">{dataMahasiswa.profile.full_name.charAt(0)}</span>
            <span className="brand-name">{dataMahasiswa.profile.full_name}</span>
          </div>
          <div className="nav-links">
            <a href="#profile" className="nav-link">Profile</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experiences" className="nav-link">Experience</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Profile 
          profile={dataMahasiswa.profile} 
          education={dataMahasiswa.education}
        />
        <Skills skills={dataMahasiswa.skills} />
        <Experiences experiences={dataMahasiswa.experiences} />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © 2024 {dataMahasiswa.profile.full_name}. Built with React.
          </p>
          <p className="footer-stats">
            Profile Views: {dataMahasiswa.statistics.views_count} | 
            Completeness: {dataMahasiswa.statistics.profile_complete_percent}%
          </p>
        </div>
      </footer>
    </div>
  );
}