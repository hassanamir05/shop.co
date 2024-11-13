"use client";

import { Children } from "react";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import DashboardLayout from "./layout";
import OrdersPage from "./orders/page";
import CustomersPage from "./customers/page";
import AnalyticsPage from "./analytics/page";
import ProductsPage from "./products/page";
import DashboardPage from "./main/page";
import SettingsPage from "./settings/page";

export default function Dashboard() {
  const pathname = usePathname();

  return (
    <DashboardLayout>
      {pathname === "/dashboard" && <DashboardPage />}
      {pathname === "/dashboard/orders" && <OrdersPage />}
      {pathname === "/dashboard/customers" && <CustomersPage />}
      {pathname === "/dashboard/analytics" && <AnalyticsPage />}
      {pathname === "/dashboard/products" && <ProductsPage />}
      {pathname === "/dashboard/settings" && <SettingsPage />}
    </DashboardLayout>
  );
}
