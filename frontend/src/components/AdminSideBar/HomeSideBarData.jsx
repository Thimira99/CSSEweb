import React from 'react';

import { FaHome } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export const sidebarData = [
    {
        title: "Dashboard",
        icon: <FaHome />,
        link: "/mainPage"
    },
    {
        title: "Approval",
        icon: <FaUserPlus />,
        link: "/approval"
    },
    {
        title: "Total Orders",
        icon: <FaUsers />,
        link: "/serchShop"
    },
    {
        title: "Delivery",
        icon: <FaStickyNote />,
        link: "/dashboard"
    },
    {
        title: "Message",
        icon: <FaUserCircle />,
        link: "/dashboard"
    },
    {
        title: "Payment",
        icon: <FaStickyNote />,
        link: "/dashboard"
    },
    {
        title: "Settings",
        icon: <FaUserCircle />,
        link: "/dashboard"
    },
    // {
    //     title: "Dashboard",
    //     icon: <FaUserCircle />,
    //     link: "/dashboard2"
    // },
]
