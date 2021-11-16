import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { FaMoneyBill } from 'react-icons/fa';
const SidebarDataChef = [
    {
      title: 'Đơn hàng phục vụ',
      path: '/account/vieworder',
      icon: <IoIcons.IoIosPaper />
    },
    {
      title: 'Cập nhật thông tin',
      path: '/account/info',
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
      path: '/account/vieworder',
      icon: <IoIcons.IoIosPaper />
    },
    {
      title: 'Cập nhật dữ liệu',
      path: '/account/info',
      icon: <FaIcons.FaFileInvoiceDollar />
    },
    {
      title: 'Bảo trì hệ thống',
      path: '/account/info',
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
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Chọn món',
        path: '/menu',
        icon: <IoIcons.IoIosPaper/>
      },
      {
        title: 'Đặt bàn',
        path: '/orderTable',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Tài khoản',
    path: '/account',
    icon: <FaIcons.FaUser />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Đơn hàng của tôi',
        path: '/account/vieworder',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Cập nhật thông tin',
        path: '/account/updateinfo',
        icon: <FaIcons.FaFileInvoiceDollar />
      }
    ]
  },
  {
    title: 'Thanh toán',
    path: '/payment',
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: 'Đánh giá',
    path: '/rating',
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