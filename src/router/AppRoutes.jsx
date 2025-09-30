import { Route, Routes } from "react-router-dom";

// Authentication
import { LoginPage } from "../pages/authentication/LoginPage";
import { RegisterPage } from "../pages/authentication/RegisterPage";
import { ForgotPasswordPage } from "../pages/authentication/ForgotPasswordPage";

//fabric module
import { FabricTable } from "../pages/fabric/FabricMaster";
import { DesignTable } from "../pages/design/DesignMaster";
import { SalesPerson } from "../pages/sales/SalesPerson";

// cms
import { JobTable } from "../pages/cms/JobMaster";
import { AgentTable } from "../pages/cms/AgentMaster";
import { CustomerTable } from "../pages/cms/CustomerMaster";
import { SupplierTable } from "../pages/cms/SupplierMaster";
import { TransportTable } from "../pages/cms/TransportMaster";




import { DashboardPage } from "../pages/DashboardPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Authentication Routes */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* fabric */}
      <Route path="/fabric/fabric-master" element={<FabricTable />} />
      <Route path="/design/design-master" element={<DesignTable />} />
      <Route path="/sales/rate-calculator" element={<SalesPerson />} />

      {/* CMS Routes */}
      <Route path="/cms/job-work-master" element={<JobTable />} />
      <Route path="/cms/agent-master" element={<AgentTable />} />
      <Route path="/cms/customer-master" element={<CustomerTable />} />
      <Route path="/cms/supplier-master" element={<SupplierTable />} />
      <Route path="/cms/transport-master" element={<TransportTable />} />

      
    </Routes>
  );
};

export default AppRoutes;
