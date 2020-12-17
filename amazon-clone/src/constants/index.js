export const API_ENDPOINT =
  "https://todolist-74794-default-rtdb.firebaseio.com";

export const STATUSES = [
  {
    value: 0,
    label: "READY",
  },
  {
    value: 1,
    label: "IN PROGRESS",
  },
  {
    value: 2,
    label: "COMPLETED",
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

// export const ADMIN_ROUTER = [
//   {
//     path: "/admin",
//     name: "Admin",
//     exact: true,
//     component: AdminHomePage,
//   },
//   {
//     path: "/admin/task-board",
//     name: "Task Management",
//     component: Taskboard,
//     exact: false,
//   },
// ];

// export const ROUTES = [
//   {
//     path: "/login",
//     name: "Login",
//     exact: false,
//     component: LoginPage,
//   },
//   {
//     path: "/signup",
//     name: "Signup",
//     exact: false,
//     component: SignupPage,
//   },
// ];
