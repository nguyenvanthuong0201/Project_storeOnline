import React from "react";
import AdminCustomer from "../Components/Page/admin/adminCustomer/AdminCustomer";
import AdminEmployee from "../Components/Page/admin/adminEmployee/AdminEmployee";
import AdminPayment from "../Components/Page/admin/adminPayment/AdminPayment";
import AdminProduct from "../Components/Page/admin/adminProducts/AdminProduct";
import AdminProfile from "../Components/Page/admin/adminProfile/AdminProfile";
import AdminStatistic from "../Components/Page/admin/adminStatistic/AdminStatistic";
import NotFound from "../Components/Page/NotFound";

export const routes = [
  {
    /// điều chỉnh
    path: "/",
    exact: true,
    main: () => <AdminStatistic />,
  },
  {
    /// điều chỉnh
    path: "/admin",
    exact: true,
    main: () => <AdminStatistic />,
  },
  {
    path: "/admin/customer",
    exact: false,
    main: () => <AdminCustomer />,
  },
  {
    path: "/admin/product",
    exact: false,
    main: () => <AdminProduct />,
  },

  {
    path: "/admin/profile",
    exact: false,
    main: () => <AdminProfile />,
  },
  {
    path: "/admin/payment",
    exact: false,
    main: () => <AdminPayment />,
  },
  {
    path: "/admin/employee",
    exact: false,
    main: () => <AdminEmployee />,
  },
  {
    // 404 phải  đặt dưới cùng
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];
