import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { FaMoneyBill } from 'react-icons/fa';
export const SidebarData = [
  {
    title: 'Nhà hàng',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Chọn món',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper/>
      },
      {
        title: 'Đặt bàn',
        path: '/overview/revenue',
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
        title: 'Cấp quyền',
        path: '/account/permission',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Đơn hàng của tôi',
        path: '/account/vieworder',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Chỉnh sửa thông tin tài khoản',
        path: '/account/info',
        icon: <FaIcons.FaFileInvoiceDollar />
      }
    ]
  },
  {
    title: 'Thanh toán',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />

  },
  {
    title: 'Hỗ trợ',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Quản lý',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
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
  },
  
  {
    title: 'Đánh giá',
    path: '/rating',
    icon: <FaIcons.FaGratipay />,
  },
];
