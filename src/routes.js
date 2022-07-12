/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/Dashboard.js";
import User from "./views/User.js";
import Donor from "./views/Donor.js";
import Donation from "./views/Donation.js";
import ProgramDrive from "./views/ProgramDrive.js";
import Supervisor from "./views/Supervisor.js";
import Address from "./views/Address.js";
import Recipient from "./views/Recipient.js";
import Transaction from "./views/Transaction.js";
import BloodBottles from "./views/BloodBottles.js";
import Prerequesites from "./views/Prerequesites.js";

const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin"
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Details",
    icon: "nc-icon nc-circle-09",
    component: User,
    layout: "/admin"
  },
  {
    path: "/donor",
    name: "Donor Details",
    icon: "nc-icon nc-circle-09",
    component: Donor,
    layout: "/admin"
  },
  {
    path: "/donation",
    name: "Donation Details",
    icon: "nc-icon nc-notes",
    component: Donation,
    layout: "/admin"
  },
  {
    path: "/program",
    name: "Program Drive",
    icon: "nc-icon nc-atom",
    component: ProgramDrive,
    layout: "/admin"
  },
  {
    path: "/supervisor",
    name: "Supervisor Details",
    icon: "nc-icon nc-circle-09",
    component: Supervisor,
    layout: "/admin"
  },
  {
    path: "/address",
    name: "Address",
    icon: "nc-icon nc-bank",
    component: Address,
    layout: "/admin"
  },
  {
    path: "/recipient",
    name: "Recipient Details",
    icon: "nc-icon nc-circle-09",
    component: Recipient,
    layout: "/admin"
  },
  {
    path: "/transaction",
    name: "Transaction",
    icon: "nc-icon nc-credit-card",
    component: Transaction,
    layout: "/admin"
  },
  {
    path: "/bottles",
    name: "Blood Bottles",
    icon: "nc-icon nc-ambulance",
    component: BloodBottles,
    layout: "/admin"
  },
  {
    path: "/prerequesites",
    name: "Prerequesites",
    icon: "nc-icon nc-layers-3",
    component: Prerequesites,
    layout: "/admin"
  },
];

export default dashboardRoutes;
