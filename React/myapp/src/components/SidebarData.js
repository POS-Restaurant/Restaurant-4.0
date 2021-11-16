import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { FaMoneyBill } from 'react-icons/fa';
const SidebarDataChef = [
    {
      title: 'Đơn hàng phục vụ',
      path: '/chef/vieworder',
      icon: <IoIcons.IoIosPaper />
    },
    {
      title: 'Cập nhật thông tin',
      path: '/chef/info',
      icon: <FaIcons.FaUser />
    },
    {
      title: 'Đăng xuất',
      path: '/',
      icon: <FaIcons.FaSignOutAlt />,
    },
];
const SidebarDataAdmin = [
    {
      title: 'Cấp quyền tài khoản',
      path: '/admin/permission',
      icon: <IoIcons.IoIosPaper />
    },
    {
      title: 'Cập nhật dữ liệu',
      path: '/admin/updatedata',
      icon: <FaIcons.FaFileInvoiceDollar />
    },
    {
      title: 'Bảo trì hệ thống',
      path: '/admin/maintenanceSys',
      icon: <FaIcons.FaFileInvoiceDollar />
    },
    {
      title: 'Đăng xuất',
      path: '/',
      icon: <FaIcons.FaSignOutAlt />,
    },
];
const SidebarDataMngr = [
  {
    title: 'Cập nhật thông tin',
    path: '/manager/info',
    icon: <FaIcons.FaUser />,
  },
  {
    title: 'Thực đơn',
    path: '/manager/menu',
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: 'Thu nhập',
    path: '/manage/bill',
    icon: <FaMoneyBill />
  },
  // {
  //   title: 'Món ăn',
  //   path: '/manage/food',
  //   icon: <FaIcons.FaPalette />
  // },
  {
    title: 'Đăng xuất',
    path: '/',
    icon: <FaIcons.FaSignOutAlt />,
  },
]

const SidebarDataCus = [
  {
    title: 'Nhà hàng',
    path: '/customer/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Chọn món',
        path: '/customer/orderFood',
        icon: <IoIcons.IoIosPaper/>
      },
      {
        title: 'Đặt bàn',
        path: '/customer/orderTable',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Tài khoản',
    path: '/customer/account',
    icon: <FaIcons.FaUser />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Đơn hàng của tôi',
        path: '/customer/account/vieworder',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Cập nhật thông tin',
        path: '/customer/account/updateinfo',
        icon: <FaIcons.FaFileInvoiceDollar />
      }
    ]
  },
  {
    title: 'Thanh toán',
    path: '/customer/payment',
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: 'Đánh giá',
    path: '/customer/rating',
    icon: <FaIcons.FaGratipay />,
  },
  {
    title: 'Đăng xuất',
    path: '/',
    icon: <FaIcons.FaSignOutAlt />,
  },
];

export {SidebarDataAdmin};
export {SidebarDataChef};
export {SidebarDataMngr};
export default SidebarDataCus;