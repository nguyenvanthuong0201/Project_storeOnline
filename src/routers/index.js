import React from "react";
import ConCustomerList from "../Containers/ConCustomerList";
import ConNotFound from "../Containers/ConNotFound";
import ConProduct from "../Containers/ConProduct";
import ConProfile from "../Containers/ConProfile";
import ConCart from "../Containers/ConCart";
import ConStatistic from "../Containers/ConStatistic";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <ConStatistic />,
  },
  {
    path: "/customer",
    exact: false,
    main: () => <ConCustomerList />,
  },
  {
    path: "/product",
    exact: false,
    main: () => <ConProduct />,
  },

  {
    path: "/profile",
    exact: false,
    main: () => <ConProfile />,
  },
  {
    path: "/cart",
    exact: false,
    main: () => <ConCart />,
  },
  {
    // 404 phải  đặt dưới cùng
    path: "",
    exact: false,
    main: () => <ConNotFound />,
  },
];
export default routes;
