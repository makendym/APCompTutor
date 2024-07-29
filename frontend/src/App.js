import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./screens/Home";
import { Login } from "./screens/Logins";
import { SignUp } from "./screens/Signups";
import ProtectedRoute from "./screens/ProtectedRoute";
import { LandingPage } from "./screens/LandingPage";
import { Services } from "./screens/Services";
import { OneOnOne } from "./screens/OneOnOne";
import { OnlineResources } from "./screens/OnlineResources";
import { GroupTutoring } from "./screens/GroupTutoring";
import { AboutUs } from "./screens/AboutUs";
import Dashboard from "./screens/dashboard/Default";
import MainLayout from "./layout/MainLayout";
import { ContactUs } from "./screens/ContactUs";
import { ChatGPT } from "./screens/ChatGPT";

import { UserAuthContextProvider } from "./context/UserAuthContext";
function App() {
  return (
    <UserAuthContextProvider>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route element={<MainLayout />}>
          {/* Nested and protected Dashboard route */}
          <Route path="dashboard" element={<Dashboard />} />
          {/* Add other protected and nested routes within MainLayout here */}
        </Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/one-on-one" element={<OneOnOne />} />
        <Route
          path="/resources-and-practice-exams"
          element={<OnlineResources />}
        />
        <Route
          path="/group-tutoring-and-workhops"
          element={<GroupTutoring />}
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ChatGPT" element={<ChatGPT />} />
      </Routes>
      <Footer />
    </UserAuthContextProvider>
  );
}

export default App;
