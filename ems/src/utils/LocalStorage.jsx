const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React and Tailwind CSS.",
        date: "2026-10-12",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Navbar",
        taskDescription: "Improve navbar styling and make it mobile responsive.",
        date: "2026-10-12",
        category: "UI Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Investigate and fix the login form validation issue.",
        date: "2026-10-12",
        category: "Bug Fixing"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard",
        taskDescription: "Develop an employee dashboard with summary cards.",
        date: "2026-10-12",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create User Profile",
        taskDescription: "Build a profile page showing employee information.",
        date: "2026-10-12",
        category: "UI Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate the employee API; the task could not be completed on time.",
        date: "2026-10-12",
        category: "API"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Dashboard",
        taskDescription: "Test dashboard components and verify displayed data.",
        date: "2026-10-12",
        category: "Testing"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Product Cards",
        taskDescription: "Design reusable product cards for the product listing page.",
        date: "2026-10-12",
        category: "UI Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Footer Layout",
        taskDescription: "Correct footer spacing and alignment across screen sizes.",
        date: "2026-10-12",
        category: "Bug Fixing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Search",
        taskDescription: "Add search functionality to filter products by name.",
        date: "2026-10-12",
        category: "Development"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write unit tests for the login and registration components.",
        date: "2026-10-12",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Document the project's setup process and component usage.",
        date: "2026-10-12",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Images",
        taskDescription: "Image optimization was not completed within the deadline.",
        date: "2026-10-12",
        category: "Performance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Responsive Testing",
        taskDescription: "Check the application layout on mobile, tablet, and desktop.",
        date: "2026-10-12",
        category: "Testing"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Contact Form",
        taskDescription: "Create a contact form with input validation and error messages.",
        date: "2026-10-12",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design About Page",
        taskDescription: "Create an about page with company information and team details.",
        date: "2026-10-12",
        category: "UI Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Connect Backend",
        taskDescription: "Connect the contact form to the backend API.",
        date: "2026-10-12",
        category: "API"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Application",
        taskDescription: "Deployment was unsuccessful and needs further investigation.",
        date: "2026-10-12",
        category: "Deployment"
      }
    ]
  }
];



const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]



export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("Admin",JSON.stringify(admin));
};

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('Admin'));
    console.log(employees,admin);
    
}



