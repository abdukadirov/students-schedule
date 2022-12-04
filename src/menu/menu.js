import React from "react";
import {UserOutlined} from '@ant-design/icons';
import ScheduleOutlined from "@ant-design/icons/lib/icons/ScheduleOutlined";

export const menus = [
    {
        id: 1,
        name: 'Schedule',
        icon:  <ScheduleOutlined />,
        path: '/schedule'
    },
    {
        id: 2,
        name: 'Clients',
        icon: <UserOutlined />,
        path: '/clients-list'
    },
]

export default menus