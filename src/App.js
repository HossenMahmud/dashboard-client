import { ThemeProvider } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/layout/Layout'
import { theme } from './theme';
import Projects from './pages/Projects/Projects';
import AddProject from './pages/Projects/AddProject';
import EditProject from './pages/Projects/EditProject';
import Employees from './pages/Employees/Employees';
import AddEmployee from './pages/Employees/AddEmployee';
import EditEmployee from './pages/Employees/EditEmployee';
import Clients from './pages/Clients/Clients';
import AddClients from './pages/Clients/AddClients';
import EditClients from './pages/Clients/EditClients';
import AllPayment from './pages/Payment/AllPayment';
import AddPayment from './pages/Payment/AddPayment';
import PaymentView from './pages/Payment/PaymentView';
import AllExpense from './pages/Expenses/AllExpense';
import EmployeeProfile from './pages/Employees/EmployeeProfile';
import ClientProfile from './pages/Clients/ClientProfile';
import Invoice from './pages/Invoice';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>

            <Route path="/" element={<Projects />} />
            <Route path="/addproject" element={<AddProject />} />
            <Route path="/editproject/:id" element={<EditProject />} />

            <Route path="/employees" element={<Employees />} />
            <Route path="/addemployee" element={<AddEmployee />} />
            <Route path="/editemployee/:id" element={<EditEmployee />} />
            <Route path="/employeeProfile" element={<EmployeeProfile />} />

            <Route path="/clients" element={<Clients />} />
            <Route path="/addclient" element={<AddClients />} />
            <Route path="/editclient/:id" element={<EditClients />} />
            <Route path="/clientProfile" element={<ClientProfile />} />

            <Route path="/payment" element={<AllPayment />} />
            <Route path="/addpayment" element={<AddPayment />} />
            <Route path="/payment/view/:paymentId" element={<PaymentView />} />

            <Route path="/expense" element={<AllExpense />} />
            <Route path="/invoice" element={<Invoice></Invoice>} />

          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
