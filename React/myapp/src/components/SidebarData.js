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
      title: 'Cập nhật thông tin tài khoản',
      path: '/account/info',
      icon: <FaIcons.FaFileInvoiceDollar />
    }
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
];
const SidebarDataMngr = [
  {
    title: 'Cập nhật thông tin',
    path: '/account/info',
    icon: <FaIcons.FaFileInvoiceDollar />,
  },
  {
    title: 'Nhân sự',
    path: '/messages/message1',
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: 'Thực đơn',
    path: '/messages/message2',
    icon: <IoIcons.IoIosPaper />
  },
  {
    title: 'Thu nhập',
    path: '/manage/bill',
    icon: <FaMoneyBill />
  },
  {
    title: 'Món ăn',
    path: '/manage/food',
    icon: <FaIcons.FaPalette />
  }
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
];

export {SidebarDataAdmin};
export {SidebarDataChef};
export {SidebarDataMngr};
export default SidebarDataCus;