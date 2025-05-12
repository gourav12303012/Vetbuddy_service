import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/user/Register";
import Login from "./component/user/Login";
import ForgotPassword from "./component/user/ForgotPassword";
import UserDashboard from "./component/user/UserDashboard";
import AppointementForm from "./component/user/AppointementForm";
import Donation from "./component/Donation";
import Adoption from "./component/Adoption";
import Volunteer from "./component/Volunteer";
import Resources from "./component/Resources";
import About from "./component/About";
import Pages from "./component/Pages";
import Emergency from "./component/Emergency";
import BasicPetCare from "./component/BasicPetCare";
import NutritionGuide from "./component/NutritionGuide";
import GroomingTips from "./component/GroomingTips";
import ExercisePlay from "./component/ExercisePlay";
import VaccinationSchedule from "./component/VaccinationSchedule";
import CommonIllnesses from "./component/CommonIllnesses";
import PetMentalHealth from "./component/PetMentalHealth";
import EmergencyCare from "./component/EmergencyCare";
import TrainingBehavior from "./component/TrainingBehavior";
import ValForm from "./component/ValForm";
import NotFound from "./views/NotFound";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/dashboard/:id", element: <UserDashboard /> },
    { path: "/appointementbook/:id", element: <AppointementForm /> },
    { path: "/donate", element: <Donation /> },
    { path: "/adopt", element: <Adoption /> },
    { path: "/volunteer", element: <Volunteer /> },
    { path: "/resources", element: <Resources /> },
    { path: "/about", element: <About /> },
    { path: "/pages", element: <Pages /> },
    { path: "/emergency", element: <Emergency /> },
    { path: "/resources/pet-care/basic-care", element: <BasicPetCare /> },
    { path: "/resources/pet-care/nutrition", element: <NutritionGuide /> },
    { path: "/resources/pet-care/grooming", element: <GroomingTips /> },
    { path: "/resources/pet-care/exercise", element: <ExercisePlay /> },
    { path: "/resources/health/vaccinations", element: <VaccinationSchedule /> },
    { path: "/resources/health/common-illnesses", element: <CommonIllnesses /> },
    { path: "/resources/health/mental-health", element: <PetMentalHealth /> },
    { path: "/resources/health/emergency-care", element: <EmergencyCare /> },
    { path: "/resources/training", element: <TrainingBehavior /> }
    ,{path:"/valForm", element:<ValForm/>},
    {path:"*",element:<NotFound/>},
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
