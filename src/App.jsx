// import { useState } from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import TextMarquee from "./components/TextMarquee";
import NavBar from "./components/NavBar";
import LayOut from "./utils/LayOut";
import About_Us from "./About/About_Us";
import Home from "./Pages/Home";
import Contact_Us from "./Pages/Contact_Us";
import Login from "./Pages/Login";
// import Fundraise from "./Fundraiser/Donate";
import Footer from "./components/Footer";
import FundraiseDetails from "./Donate/DonateDetails";
import Profile from "./Profile/Profile";
import TermsAndConditions from "./Policy/TermsAndConditions";
import PrivacyP from "./Policy/PrivacyP";
import ScrollToTop from "./TopScrolling/ScrollToTop";
import Donate from "./Donate/Intrests";
import Cards from "./components/Cards";
import DonateDetails from "./Donate/DonateDetails";
import BlogDetails from "./BlogPages/BlogDetails";
import PersonalDetails from "./Registration/PersonalDetails";
import Hobbies from "./Registration/Hobbies";
import AboutHobbies from "./Registration/AboutHobbies";
import FamilyDetails from "./Registration/FamilyDetails";
import PartnerPreferences from "./Registration/PartnerPreferences";
import Astrological from "./Registration/Astrological";
import Qualifications from "./Registration/Qualifications";
import ContactDetails from "./Registration/ContactDeatils";
import MedicalDetails from "./Registration/MedicalDetails";
import UploadPhotos from "./Registration/UploadPhotos";
import AboutYourself from "./Registration/AboutYourself";
import FaqPage from "./Pages/FaqPage ";
// import { Home } from "lucide-react";

function App() {
  // const [count, setCount] = useState(0); // Uncomment if needed
  const location = useLocation();
  const noFooterRoutes = ["/pd", "/hobbies", "/abouthobbies" , "/familydetails" , "/partnerpreferences" , "/astrological" , "/qualifications" , "/contactdetails" , "/medicaldetails" , "/uploadphotos" , "/aboutyourself"];

  return (
    <>
      <div>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<LayOut />} />
          <Route path="/" element={<Home />} />
          <Route path="/t" element={<TextMarquee />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/about-us" element={<About_Us />} />
          <Route path="/contact" element={<Contact_Us />} />
          {/* <Route path="/fundraise" element={<Fundraise/>}/> */}
          <Route path="/donate" element={<Donate />} />
          <Route path="/donateDetails" element={<DonateDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/terms_and_conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy_policy" element={<PrivacyP />} />
          <Route path="/cards/" element={<Cards />} />
          <Route path="/donate/:id" element={<DonateDetails />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/pd" element={<PersonalDetails />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/abouthobbies" element={<AboutHobbies />} />
          <Route path="/familydetails" element={<FamilyDetails />} />
          <Route path="/partnerpreferences" element={<PartnerPreferences />} />
          <Route path="/astrological" element={<Astrological />} />
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/contactdetails" element={<ContactDetails />} />
          <Route path="/medicaldetails" element={<MedicalDetails />} />
          <Route path="/uploadphotos" element={<UploadPhotos  />} />
          <Route path="/aboutyourself" element={<AboutYourself  />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>

        {!noFooterRoutes.includes(location.pathname) && <Footer />}
      </div>
    </>
  );
}

export default App;
