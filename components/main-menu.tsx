import Link from "next/link";
import React from "react";
import LogoutIcon from "./logout-icon";
import MenuItem, { Menu } from "./menu-item";
import BellMenuIcon from "./svgs/bell-menu-icon";
import BookingMenuIcon from "./svgs/booking-menu-icon";
import CarMenuIcon from "./svgs/car-menu-icon";
import DashboardMenuIcon from "./svgs/dashboard-menu-icon";
import Logo from "./svgs/logo";
import PaymentMenuIcon from "./svgs/payment-menu-icon";
import ReportMenuIcon from "./svgs/report-menu-icon";
import SettingMenuIcon from "./svgs/setting-menu-icon";
import TransactionMenuIcon from "./svgs/transaction-menu-icon";

const menus = [
  { icon: DashboardMenuIcon, title: "Dashboard", href: "/" },
  { icon: CarMenuIcon, title: "Drivers", href: "/drivers" },
  { icon: BookingMenuIcon, title: "Bookings", href: "/bookings" },
  { icon: BellMenuIcon, title: "Notifications", href: "/notifications" },
  { icon: SettingMenuIcon, title: "Settings", href: "/settings" },
] as Menu[];

const reportMenus = [
  {
    icon: PaymentMenuIcon,
    title: "Payment Details",
    href: "/payment-details",
  },
  {
    icon: TransactionMenuIcon,
    title: "Transactions",
    href: "/transactions",
  },
  {
    icon: ReportMenuIcon,
    title: "Car Reports",
    href: "/car-reports",
  },
] as Menu[];

function MainMenu() {
  return (
    <div className="flex w-60 flex-none flex-col justify-between bg-black p-6 text-white">
      <div className="flex flex-col space-y-5">
        {/* Logo */}
        <div>
          <Link href="/" className="block px-2 py-6">
            <Logo />
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <ul className="flex flex-col space-y-2">
            {menus.map((menu, index) => (
              <MenuItem
                key={index}
                title={menu.title}
                href={menu.href}
                icon={menu.icon}
              />
            ))}
          </ul>

          <hr className="ml-4 py-2 text-white/20" />

          <div>
            <p className="px-4 py-3 text-white/50">Report</p>

            <ul>
              {reportMenus.map((menu, index) => (
                <MenuItem
                  key={index}
                  title={menu.title}
                  href={menu.href}
                  icon={menu.icon}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <button className="h3 flex w-full items-center justify-center rounded-lg bg-white/20 py-3 px-4">
          <LogoutIcon className="mr-3" /> Logout
        </button>
      </div>
    </div>
  );
}

export default MainMenu;
