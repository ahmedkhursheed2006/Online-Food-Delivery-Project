export const adminForm = [
  {
    id: 1,
    name: "adminName",
    type: "text",
    placeholder: "Admin Name",
    label: "Admin Name",
  },
  {
    id: 2,
    name: "adminEmail",
    type: "email",
    placeholder: "Admin Email (must end with @system.doordash.com)",
    label: "Admin Email",
  },
  {
    id: 3,
    name: "adminPassword",
    type: "password",
    placeholder: "Admin Password",
    label: "Admin Password",
  },
  {
    id: 4,
    name: "adminRole",
    type: "radio",
    label: "Admin Role",
    options: [
      { value: "Admin", label: "Admin" },
      { value: "SuperAdmin", label: "Super Admin" },
    ],
  },
];
