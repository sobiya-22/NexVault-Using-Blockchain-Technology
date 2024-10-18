import Branding from './components/Branding';
import Navbar from './components/Navbar';
import ServiceCards from './components/ServiceCards';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
//import User from './components/User';
//import Lawyer from './components/Lawyer';
//import Judge from './components/Judge';
//import Us from './components/Dashboard';
//import UploadDocument from './components/UploadDocument';
//import DownloadDocument from './components/DownloadDocument';
//import GrantAccess from './components/GrantAccess';
//import RevokeAccess from './components/RevokeAccess';

function App() {
  return (
    <>
      <Navbar />

      <Branding />

      <ServiceCards/>
      <section style={{ display: 'flex', padding: '20px' }}>
      <FAQ />
      <Contact />
    </section>
    
    
    </>
  );
}

export default App;
