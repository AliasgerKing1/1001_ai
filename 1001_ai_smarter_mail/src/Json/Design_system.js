let social = [
    {
        facebook : ""
    },
    {
        twitter : ""
    },
    {
        google : ""
    },
]

let signinText = 'Sign in'
let signupText = 'Create an account'
let signupTextSuffix = 'New on our platform?'
let main_signin_heading = 'Welcome to Vuexy! 👋'
let sub_main_signin_heading = 'Please sign-in to your account and start the adventure'

let form = [
    {
        email_placeholder : "Enter your email or username",
        email_username_label : "Email or Username·",
 password_placeholder : "············",
        password_label : "Password·"
    },
]

let brand = [
    {
        name : "Vuexy",
        logo : <svg width={32} height={22} viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0" />
        <path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616" />
        <path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.<EUGPSCoordinates>56Z" fill="#7367F0" />
      </svg>
    },

]

let theme_list = [
    {
        id : 1,
        src : "/assets/img/elements/8.jpg",
        name : "Vuexy"
    },
    {
        id : 2,
        src : "/assets/img/elements/9.jpg",
        name : "Modernize"
    },
    {
        id : 3,
        src : "/assets/img/elements/10.jpg",
        name : "Porto"
    },
    {
        id : 4,
        src : "/assets/img/elements/12.jpg",
        name : "epty"
    },
]

let createAppStepSidebar = [
    {
        heading : "Select Theme",
        subheading : "Select desire theme",
        icon : 'ti-layout-grid',
        state : 1
    },
    {
        heading : "Meta data",
        subheading : "data about project",
        icon : 'ti-file-description',
        state : 2
    },
    {
        heading : "Select Pages",
        subheading : "Select pages",
        icon : 'ti-files',
        state : 3
    },
    {
        heading : "Select Features",
        subheading : "Additional features",
        icon : 'ti-lifebuoy',
        state : 4
    },
]

let project_category = [ 'Generative', 'Ecommerce', 'Gaming', 'Service', 'Admin Panel', 'Education', 'Social Media', 'Gifts',
]

let memeber_list = [
    {
        name : 'Aliasger',
        email : "aliasgersub34@gmail.com",
        image : '/assets/img/avatars/1.png'
    },
    {
        name : 'Hussain',
        email : "hussain24@gmail.com",
        image : '/assets/img/avatars/10.png'
    },
    {
        name : 'Burhanuddin',
        email : "burhan.baroor@gmail.com",
        image : '/assets/img/avatars/5.png'
    },
    {
        name : 'Moiz',
        email : "moizKt@gmail.com",
        image : '/assets/img/avatars/4.png'
    },
    {
        name : 'Ammar',
        email : "mynetwork@gmail.com",
        image : '/assets/img/avatars/2.png'
    },
]

let selectFeatures = [
    {
        text : "Redux",
        className : "switch-square",
        id : 'redux'
    },
    {
        text : "Login Auth",
        className : "switch-square switch-success",
        id : 'login_auth'
    },
    {
        text : "Routing",
        className : "switch-square switch-warning",
        id : 'routing'
    },
    {
        text : "Auth & Anti-Auth",
        className : "switch-square switch-danger" ,
        id : 'auth_antiauth'
    },
    {
        text : "File Upload",
        className : "switch-square switch-secondary",
        id : 'file_uplaod'
    },
    {
        text : "Pages and Shared",
        className : "switch-square switch-info",
        id : 'pages_shared'
    },
    {
        text : "SEO Optimised",
        className : "switch-square switch-dark",
        id : 'seo_optimised'
    },
    {
        text : "Infinite Scroll",
        className : "switch-square",
        id : 'infinite_scroll'
    },
    {
        text : "Pagination",
        className : "switch-square switch-success",
        id : 'pagination'
    },
    {
        text : "Admin Dashboard" ,
        className : "switch-square switch-warning",
        id : 'admin_dashboard'
    },
    {
        text : "Restful API",
        className : "switch-square switch-danger",
        modal_toggle : "modal",
        modal_target : "#restfulApi",
        id : 'restful_api',
    },
]



let selectRestfulAPI = [
    {
        text : "User",
        className : "switch-square",
        id : 'user'
    },
    {
        text : "Admin",
        className : "switch-square switch-success",
        id : 'admin'
    },
    {
        text : "Product" ,
        className : "switch-square switch-warning",
        id : 'product'
    },
    {
        text : "Category",
        className : "switch-square switch-danger",
        id : 'category' 
    },
    {
        text : "Client",
        className : "switch-square switch-secondary",
        id : 'client'
    },
    {
        text : "Post",
        className : "switch-square switch-info",
        id : 'post'
    },
    {
        text : "Cources",
        className : "switch-square switch-dark",
        id : 'cources'
    },
    {
        text : "Faculties",
        className : "switch-square",
        id : 'faculties'
    },
    {
        text : "Student",
        className : "switch-square switch-success",
        id : 'student'
    },
    {
        text : "Videos",
        className : "switch-square switch-warning",
        id : 'video'
    },
    {
        text : "Images",
        className : "switch-square switch-danger",
        id : 'image'
    },
    {
        text : "Question",
        className : "switch-square switch-secondary",
        id : 'question'
    },
    {
        text : "Feedback",
        className : "switch-square switch-info",
        id : 'feedback'
    },
]

let shapeDropdown = [
    {
        name : 'Rectangle',
        icon : 'ti-rectangle',
        id : 'rectangle'
    },
    {
        name : 'Circle',
        icon : 'ti-circle',
        id : 'circle'
    },
    {
        name : 'Square',
        icon : 'ti-square',
        id : 'square'
    },
    {
        name : 'Line',
        icon : 'ti-line',
        id : 'line'
    },
    {
        name : 'Star',
        icon : 'ti-star',
        id : 'star'
    },
    {
        name : 'Arrow',
        icon : 'ti-arrow-up-right-circle',
        id : 'arrow'
    },
    {
        name : 'Polygon',
        icon : 'ti-polygon',
        id : 'polygon'
    },
]
export {social, signinText, signupText, signupTextSuffix, main_signin_heading, sub_main_signin_heading, form, brand, theme_list, createAppStepSidebar, project_category, memeber_list, selectFeatures, selectRestfulAPI, shapeDropdown}