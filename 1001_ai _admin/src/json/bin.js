let roles_list = [
    "Admin", "CEO", "CTO", "CIO", "Head of Product", "Product Manager", "Digital marketer", "Technical Lead", "Team Lead", "Principal Developer", "Senior Frontend Developer", "Senior Backend Developer", "Senior Python Developer", "Junior Frontend Developer", "Junior Backend Developer", "Junior Python Developer", "Intern Frontend Developer", "Intern Backend Developer", "Intern Python Developer", "Social Media Manager"
    ]

let role_prop_num = [
    {
        rights: "Main Dashboard"
    },
    {
        rights: "Crm Dashboard"
    },
    {
        rights: "Ecommerce Dashboard"
    },
    {
        rights: "Roles Change"
    },
    {
        rights: "Database"
    },
    {
        rights: "Member Add"
    },
    {
        rights: "Member See"
    },
    {
        rights: "Member Delete"
    },
    {
        rights: "Member Update"
    },
    {
        rights: "User Add"
    },
    {
        rights: "User See"
    },
    {
        rights: "User Delete"
    },
    {
        rights: "User Update"
    },
    {
        rights: "Subscription Assignment"
    },
    {
        rights: "Social Media Add"
    },
    {
        rights: "Social Media See"
    },
    {
        rights: "Social Media Delete"
    },
    {
        rights: "Social Media Update"
    },
    {
        rights: "Frontend"
    },
    {
        rights: "Backend"
    },
    {
        rights: "Code"
    },

    {
        rights: "Website Clonning Ai"
    },
    {
        rights: "Asign Role"
    },
    {
        rights: "Image Generation Ai"
    },
    {
        rights: "Copy Writing Ai"
    },
    {
        rights: "Analytics"
    },
    {
        rights: "Presentation Maker"
    },
    {
        rights: "Automate It"
    },
    {
        rights: "Frontend Hosting"
    },
    {
        rights: "Backend Hosting"
    },
    {
        rights: "ENACC"
    },
    {
        rights: "VImate"
    },
    {
        rights: "Task Manager"
    },
    {
        rights: "Email"
    },
    {
        rights: "Contact"
    },
]

let roles_with_permissions = {
    admin : [
        "main_dashboard",
        "crm_dashboard",
        "ecommerce_dashboard",
        "roles_change",
        "database",
        "member_add",
        "member_see",
        "member_delete",
        "member_update",
        "user_add",
        "user_see",
        "user_delete",
        "user_update",
        "subscription_assignment",
        "social_media_add",
        "social_media_see",
        "social_media_delete",
        "social_media_update",
        "frontend",
        "backend",
        "code",
        "website_clonning_ai",
        "assign_role",
        "image_generation_ai",
        "copy_writing_ai",
        "Analytics",
        "presentation_maker",
        "automate_it",
        "frontend_hosting",
        "backend_hosting",
        "ENACC",
        "VImate",
        "task_manager",
        "email",
        "contact",
        {
          remove : ["CEO", "CTO", "CIO", "Head of Product ", "Product Manager", "Digital marketer", "Technical Lead", "Team Lead", "Principal Developer", "Senior Frontend Developer", "Senior Backend Developer", "Senior Python Developer", "Junior Frontend Developer", "Junior Backend Developer", "Junior Python Developer", "Intern Frontend Developer", "Intern Backend Developer", "Intern Python Developer", "Social Media Manager"]
        }
    ],
    CEO : [
        "main_dashboard",
        "crm_dashboard",
        "ecommerce_dashboard",
        "roles_change",
        "database",
        "member_add",
        "member_see",
        "member_delete",
        "member_update",
        "user_add",
        "user_see",
        "user_delete",
        "user_update",
        "subscription_assignment",
        "social_media_add",
        "social_media_see",
        "social_media_delete",
        "social_media_update",
        "frontend",
        "backend",
        "code",
        "website_clonning_ai",
        "assign_role",
        "image_generation_ai",
        "copy_writing_ai",
        "Analytics",
        "presentation_maker",
        "automate_it",
        "frontend_hosting",
        "backend_hosting",
        "ENACC",
        "VImate",
        "task_manager",
        "email",
        "contact",
        {
          remove : ["CTO", "CIO", "Head of Product ", "Product Manager", "Digital marketer", "Technical Lead", "Team Lead", "Principal Developer", "Senior Frontend Developer", "Senior Backend Developer", "Senior Python Developer", "Junior Frontend Developer", "Junior Backend Developer", "Junior Python Developer", "Intern Frontend Developer", "Intern Backend Developer", "Intern Python Developer", "Social Media Manager"]
        },
    ],
    CTO : [
        "main_dashboard",
        "crm_dashboard",
        "ecommerce_dashboard",
        "database",
        "member_add",
        "member_see",
        "member_delete",
        "member_update",
        "user_add",
        "user_see",
        "user_delete",
        "user_update",
        "subscription_assignment",
        "frontend",
        "backend",
        "code",

        {
          remove : []
        },
    ],

    CIO  : [
      "user_add",
      "user_see",
      "user_update",
      "social_media_add",
      "social_media_see",
      "social_media_delete",
      "social_media_update",
      "website_clonning_ai",
      "image_generation_ai",
      "copy_writing_ai",
      "presentation_maker",
      "automate_it",
      "frontend_hosting",
      "backend_hosting",
      "ENACC",
      "VImate",
      "task_manager",
      {
        remove : []
      },
  ],
  head_of_product : [
    "member_add",
    "member_see",
    "member_update",
    "user_add",
    "user_see",
    "user_delete",
    "user_update",
    "website_clonning_ai",
    "image_generation_ai",
    "copy_writing_ai",
    "Analytics",
    "presentation_maker",
    "automate_it",
    "frontend_hosting",
    "backend_hosting",
    "ENACC",
    "VImate",
    "task_manager",
    "email",
    "contact",
    {
      remove : []
    },
],
product_manager : [
    "user_add",
    "user_see",
    "user_update",
    "website_clonning_ai",
    "image_generation_ai",
    "copy_writing_ai",
    "presentation_maker",
    "automate_it",
    "frontend_hosting",
    "backend_hosting",
    "ENACC",
    "VImate",
    "task_manager",
    "email",
    "contact",
    {
      remove : []
    },
],
digital_marketer : [
    "user_add",
    "user_see",
    "user_update",
    "website_clonning_ai",
    "image_generation_ai",
    "copy_writing_ai",
    "Analytics",
    "presentation_maker",
    "automate_it",
    "frontend_hosting",
    "backend_hosting",
    "ENACC",
    "VImate",
    "task_manager",
    "email",
    "contact",
    {
      remove : []
    },
],
technical_Lead : [
    "user_add",
    "user_see",
    "user_update",
    "website_clonning_ai",
    "image_generation_ai",
    "copy_writing_ai",
    "presentation_maker",
    "automate_it",
    "frontend_hosting",
    "backend_hosting",
    "ENACC",
    "VImate",
    "task_manager",
    "email",
    "contact",
    "social_media_add",
    "social_media_see",
    {
      remove : []
    },
],
team_lead : [
    "user_add",
    "user_see",
    "user_update",
    "website_clonning_ai",
    "image_generation_ai",
    "copy_writing_ai",
    "presentation_maker",
    "automate_it",
    "frontend_hosting",
    "backend_hosting",
    "ENACC",
    "VImate",
    "task_manager",
    "email",
    "contact",
    "frontend",
    "backend",
    "code",
    {
      remove : []
    },
],
principal_developer : [
    "website_clonning_ai",
    "image_generation_ai",
    "copy_writing_ai",
    "presentation_maker",
    "automate_it",
    "frontend_hosting",
    "backend_hosting",
    "ENACC",
    "VImate",
    "task_manager",
    "email",
    "contact",
    "frontend",
    "backend",
    "code",
    {
      remove : []
    },
],
senior_frontend_developer : [
    "website_clonning_ai",
    "image_generation_ai",
    "copy_writing_ai",
    "presentation_maker",
    "automate_it",
    "frontend_hosting",
    "backend_hosting",
    "ENACC",
    "VImate",
    "frontend",
    "code",
    {
      remove : []
    },
],
senior_backend_developer : [
    "website_clonning_ai",
    "image_generation_ai",
    "copy_writing_ai",
    "presentation_maker",
    "automate_it",
    "frontend_hosting",
    "backend_hosting",
    "ENACC",
    "VImate",
    "backend",
    "code",
    {
      remove : []
    },
],
senior_python_developer : [
    "website_clonning_ai",
    "image_generation_ai",
    "copy_writing_ai",
    "presentation_maker",
    "automate_it",
    "frontend_hosting",
    "backend_hosting",
    "ENACC",
    "VImate",
    "backend",
    "code",
    {
      remove : []
    },
],
junior_frontend_developer : [
    "website_clonning_ai",
    "image_generation_ai",
    "copy_writing_ai",
    "presentation_maker",
    "automate_it",
    "frontend_hosting",
    "backend_hosting",
    "ENACC",
    "VImate",
    "frontend",
    "code",
    {
      remove : []
    },
],
junior_backend_developer : [
    "website_clonning_ai",
    "image_generation_ai",
    "copy_writing_ai",
    "presentation_maker",
    "automate_it",
    "frontend_hosting",
    "backend_hosting",
    "ENACC",
    "VImate",
    "backend",
    "code",
    {
      remove : []
    },
],
junior_python_developer : [
    "website_clonning_ai",
    "image_generation_ai",
    "copy_writing_ai",
    "presentation_maker",
    "automate_it",
    "frontend_hosting",
    "backend_hosting",
    "ENACC",
    "VImate",
    "backend",
    "code",
    {
      remove : []
    },
],
intern_frontend_developer : [
    "website_clonning_ai",
    "image_generation_ai",
    "copy_writing_ai",
    "presentation_maker",
    "automate_it",
    "frontend_hosting",
    "backend_hosting",
    "ENACC",
    "VImate",
    "frontend",
    "code",
    {
      remove : []
    },
],
intern_backend_developer : [
    "website_clonning_ai",
    "image_generation_ai",
    "copy_writing_ai",
    "presentation_maker",
    "automate_it",
    "frontend_hosting",
    "backend_hosting",
    "ENACC",
    "VImate",
    "backend",
    "code",
    {
      remove : []
    },
],
social_media_manager : [
  "social_media_add",
  "social_media_see",
  "social_media_delete",
  "social_media_update",
    {
      remove : []
    },
],
}
export { roles_list, role_prop_num, roles_with_permissions }
//CIO = chief innovation officer










// main_dashboard
// crm_dashboard
// ecommerce_dashboard
// roles_change
// database
// member_add
// member_see
// member_delete
// member_update
// user_add
// user_see
// user_delete
// user_update
// subscription_assignment
// social_media_add
// social_media_see
// social_media_delete
// social_media_update
// frontend
// backend
// code
// website_clonning_ai
// assign_role
// image_generation_ai
// copy_writing_ai
// Analytics
// presentation_maker
// automate_it
// frontend_hosting
// backend_hosting
// ENACC
// VImate
// task_manager
// email
// contact