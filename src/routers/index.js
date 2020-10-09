import React from "react";
import ConCustomerList from "../Containers/ConCustomerList";
import ConNotFound from "../Containers/ConNotFound";
import ConProduct from "../Containers/ConProduct";
import ConProfile from "../Containers/ConProfile";
import ConStatistic from "../Containers/ConStatistic";
import ConWarehouse from "../Containers/ConWarehouse";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <ConCustomerList />,
  },
  {
    path: "/product",
    exact: false,
    main: () => <ConProduct />,
  },
  {
    path: "/statistic",
    exact: false,
    main: () => <ConStatistic />,
  },
  {
    path: "/profile",
    exact: false,
    main: () => <ConProfile />,
  },
  {
    path: "/warehouse",
    exact: false,
    main: () => <ConWarehouse />,
  },
  {
    // 404 phải  đặt dưới cùng
    path: "",
    exact: false,
    main: () => <ConNotFound />,
  },
];
export default routes;
