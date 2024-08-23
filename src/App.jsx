// // eslint-disable-next-line no-unused-vars
// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// const UserForm = lazy(() => import('./components/UserForm/UserForm'));
// const FormComponent = lazy(() => import('./components/FormComponent/FormComponent'));
// const GuestForm = lazy(() => import('./components/GuestForm/GuestForm'));
// const AlreadyRegistertedCard = lazy(() => import('./components/AlreadyRegistertedCard/AlreadyRegistertedCard'));
// const StudentPass = lazy(() => import('./components/StudentPass/StudentPass'));
// const ConfrimPass = lazy(() => import('./components/ConfrimPass/ConfrimPass'));
// import "./App.css";

// function App() {
//   return (
//     <Suspense fallback={<div style={{color:"white"}}>Loading...</div>}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<FormComponent />} />
//           <Route path="/userform" element={<UserForm />} />
//           <Route path="/guestForm" element={<GuestForm />} />
//           <Route path="/alreadyRegistered" element={<AlreadyRegistertedCard />} />
//           <Route path="/generatePass" element={<StudentPass />} />
//           <Route path="/confrimPass" element={<ConfrimPass />} />
//         </Routes>
//       </Router>
//     </Suspense>
//   );
// }

// export default App;





import React from 'react';
import TableComponent from './components/Table/TableComponent';
import './App.css';
const App = () => {
  const sampleData = [
    { roll_no: '20A80501', name: 'Student 1', college_mail: 'CSE', link: 'https://www.example.com/profile/johndoe' },
    { roll_no: '20A80502', name: 'Student 2', college_mail: 'CSE', link: 'https://www.example.com/profile/janesmith' },
    { roll_no: '20A80503', name: 'Student 3', college_mail: 'ECE', link: 'https://www.example.com/profile/alicej' },
    { roll_no: '20A80504', name: 'Student 4', college_mail: 'EEE', link: 'https://www.example.com/profile/bobbrown' },
    { roll_no: '20A80505', name: 'Student 5', college_mail: 'MECH', link: 'https://www.example.com/profile/emilydavis' },
];
  return (
    <div>
      <h1>Student Info</h1>
      <TableComponent  data={sampleData}/>
    </div>
  );
 
};

export default App;