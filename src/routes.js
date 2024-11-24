import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const StudentManagement=React.lazy(() => import('./views/base/student-management/StudentManagement'))
const AddStudent=React.lazy(() => import('./views/base/student-management/AddStudent'))
const EditStudent=React.lazy(() => import('./views/base/student-management/EditStudent'))
const StudentProfile=React.lazy(() => import('./views/base/student-management/StudentProfile'))
const TeacherProfile=React.lazy(() => import('./views/base/teacher-management/TeacherProfile'))
const TeacherManagement=React.lazy(() => import('./views/base/teacher-management/TeacherManagement'))
const AddTeacher=React.lazy(() => import('./views/base/teacher-management/AddTeacher'))
const AssignRoles=React.lazy(() => import('./views/base/teacher-management/AssignRoles'))
const CourseManagement=React.lazy(() => import('./views/base/course-management/CourseManagement'))
const AttendanceManagement=React.lazy(() => import('./views/base/attendance-management/AttendanceManagement'))
const Examinations=React.lazy(() => import('./views/base/examinations/Examinations'))
const ExamResults=React.lazy(() => import('./views/base/examinations/ExamResults'))
const FeesManagement=React.lazy(()=>import('./views/base/fees-management/Feesmanagement'))
const AddFees=React.lazy(()=>import('./views/base/fees-management/AddFees'))
const FeesReports=React.lazy(()=>import('./views/base/fees-management/FeesReport'))
const TimetableManagement=React.lazy(()=>import('./views/base/timetable-management/Timetable'))
const LibraryManagement=React.lazy(()=>import('./views/base/library-management/Library'))
const HumanResourcesAndPayroll=React.lazy(()=>import('./views/base/human-resources-payroll/HRandPayroll'))
const InventoryManagement=React.lazy(()=>import('./views/base/inventory-management/inventory'))
const AcademicRecords=React.lazy(()=>import('./views/base/academic-records/academicrecords'))
const StudentRecords=React.lazy(()=>import('./views/base/student-records/studentrecords'))
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/StudentManagement', name: 'Student Management', element: StudentManagement },
  { path: '/AddStudent', name: 'Add Student', element: AddStudent },
  {path:'/EditStudent',name:'Edit Student',element:EditStudent},
  {path:'/StudentProfile',name:'Student Profile',element:StudentProfile},
  { path: '/TeacherManagement', name: 'Teacher Management', element: TeacherManagement },
  {path:'/TeacherProfile',name:'Teacher Profile',element:TeacherProfile},
  {path:'/AddTeacher',name:'Add Teacher',element:AddTeacher},
  {path:'/AssignRoles',name:'Assign Role',element:AssignRoles},
  { path: '/CourseManagement', name: 'Course Management', element: CourseManagement },
  { path: '/Examinations', name: 'Examinations', element: Examinations },
  { path: '/Examinations', name: 'Exam Results', element: ExamResults },
  { path: '/FeesManagement', name: 'Fees Management', element: FeesManagement },
  {path:'/FeesManagement/AddFees',name:'Add Fees',element:AddFees},
  {path:'/FeesManagement/FeesReport',name:'Fees Report',element:FeesReports},
  { path: '/TimetableManagement', name: 'Time Table Management', element: TimetableManagement },
  { path: '/LibraryManagement', name: 'Library Management', element: LibraryManagement },
  {path:'/HumanResourcesAndPayroll',name:'Human Resources And Payroll', element:HumanResourcesAndPayroll},
  { path: '/InventoryManagement/Inventory', name: 'Inventory Management', element: InventoryManagement },
  { path: '/AcademicRecords', name: 'Academic Records', element: AcademicRecords },
  { path: '/StudentRecords', name: 'Student Records', element: StudentRecords },
  {path:'/AttendanceManagement',name:'AttendanceManagement',element:AttendanceManagement},
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tabs', name: 'Tabs', element: Tabs },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
