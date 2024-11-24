import React from 'react'
import CIcon from '@coreui/icons-react'
import { MdDashboard } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";
import { MdOutlineInventory } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { FaCashRegister } from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { compose } from 'redux'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <MdDashboard style={{ marginRight: '8px' }}/>,
    badge: {
      color: 'info',

    },
  },
  {
    component: CNavGroup,
    name: 'Student Management',
    to: '/StudentManagement',
    icon: <GrGroup style={{ marginRight: '8px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'View Student List',
        to: '/StudentManagement',
      },
      {
        component: CNavItem,
        name: 'Add Student',
        to: '/AddStudent',
      },     
      {
        component: CNavItem,
        name: 'Update Delete Student',
        to: '/updatedeletestudent'
      },
      
    ],
  },
  {
    component: CNavGroup,
    name: 'Teacher Management',
    to: '/Teacher-Management',
    icon: <FaChalkboardTeacher style={{ marginRight: '8px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Teacher',
        to: '/TeacherManagement',
      },
      {
        component: CNavItem,
        name: 'Add Teacher',
        to: '/AddTeacher',
      },
      {
        component: CNavItem,
        name: 'Update Delete Teacher',
        to: '/updatedeleteteacher',
      },
      {
        component: CNavItem,
        name: 'Assign Role',
        to: '/AssignRoles',
      },
      {
        component: CNavItem,
        name: 'Teacher Report',
        to: '/Report',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Fees Management',
    to: '/Fees-Management',
    icon: <LuIndianRupee style={{ marginRight: '8px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Fees',
        to: '/FeesManagement',
      },
      {
        component: CNavItem,
        name: 'Add Fees',
        to: '/FeesManagement/AddFees',
      },
      {
        component: CNavItem,
        name: 'Fees Report',
        to: '/FeesManagement/FeesReport',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Inventory Management',
    to: '/InventoryManagement',
    icon: <MdOutlineInventory style={{ marginRight: '8px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Inventory',
        to: '/InventoryManagement/Inventory',
      },
       {
        component: CNavItem,
        name: 'Inventory Report',
        to: '/Report',
      },

    ],
  },
  {
    component: CNavGroup,
    name: 'Library Management',
    to: '/Library-Management',
    icon: <IoLibrary style={{ marginRight: '8px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Library',
        to: '/base/LibraryManagement',
      },
       {
        component: CNavItem,
        name: 'Library Report',
        to: '/Report',
      },

    ],
  },
  {
    component: CNavGroup,
    name: 'Time Table Management',
    to: '/timetable-management',
    icon: <IoTime style={{ marginRight: '8px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Time Table',
        to: '/TimetableManagement/Timetable',
      },
      {
        component: CNavItem,
        name: 'Print',
        to: '/PrintTimetable',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Human ResourcesPayroll ',
    to: '/HumanResourcesAndPayroll',
    icon: <FaPeopleLine style={{ marginRight: '8px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'HR',
        to: 'HumanResourcesAndPayroll/Hr',
      },
      {
        component: CNavItem,
        name: 'Payroll',
        to: 'HumanResourcesAndPayroll/Payroll',
      },
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: (
  //         <React.Fragment>
  //           {'Multi Select'}
  //           <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
  //         </React.Fragment>
  //       ),
  //       href: 'https://coreui.io/react/docs/forms/multi-select/',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: (
  //         <React.Fragment>
  //           {'Range Slider'}
  //           <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
  //         </React.Fragment>
  //       ),
  //       href: 'https://coreui.io/react/docs/forms/range-slider/',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: (
  //         <React.Fragment>
  //           {'Rating'}
  //           <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
  //         </React.Fragment>
  //       ),
  //       href: 'https://coreui.io/react/docs/forms/rating/',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: (
  //         <React.Fragment>
  //           {'Date Picker'}
  //           <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
  //         </React.Fragment>
  //       ),
  //       href: 'https://coreui.io/react/docs/forms/date-picker/',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Date Range Picker',
  //       href: 'https://coreui.io/react/docs/forms/date-range-picker/',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: (
  //         <React.Fragment>
  //           {'Time Picker'}
  //           <CIcon icon={cilExternalLink} size="sm" className="ms-2" />
  //         </React.Fragment>
  //       ),
  //       href: 'https://coreui.io/react/docs/forms/time-picker/',
  //       badge: {
  //         color: 'danger',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  {
    component: CNavGroup,
    name: 'Other Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  
]

export default _nav
