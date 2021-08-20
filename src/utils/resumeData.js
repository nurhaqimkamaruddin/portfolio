import { AssignmentIndOutlined, Language, WebOutlined, YouTube } from '@material-ui/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHub from '@material-ui/icons/GitHub';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
export default {
    name: 'Nurhaqim Kamaruddin',
    title: 'Full stack developer',
    birthday : '30th June 1998',
    email: 'nurhaqimkamaruddin@gmail.com',
    phone: '0137449197',
    socials : {
        facebook: {
            link: 'https://www.facebook.com/nurhaqim.kamaruddin',
            text: 'Nurhaqim FB',
            icon: <FacebookIcon />,
        },
        github:{
            link: 'https://github.com/nurhaqimkamaruddin',
            text: 'Nurhaqim Github',
            icon: <GitHubIcon />,
        },
        linkedin:{
            link: 'https://www.linkedin.com/in/nurhaqim-kamaruddin-65166818b/',
            text: 'Nurhaqim Linkedin',
            icon: <LinkedInIcon />,
        }
    },
    about: 'To develop a long term career that leads to futher growth in my professional skills and personal satisfaction by utilizing my skills and \nability to work for the growth of an organization /n “, hence there is me to be engineers or entrepreneurs which will tackle the larger, more expensive, and difficult problems. I believe there are professional engineers who have great ideas, but they don’t know they can build a company from those ideas. If Elon (btw I love Elon) can build two Internet companies, a rocket company, a car company, and a solar company - why can’t you?',
    experiences: [
        {
            title: 'Assistant Creative Designer',
            date: 'March 2020',
            description: 'Help in managing company creative team and involved in documentary of Assembling Ocean Cleanup boat at Sungai Klang which sposored by Microsoft and United Nation '
        },
        {
            title: 'Software Developer Intern',
            date: 'March 2021 - August 2021',
            description: 'Involve in developing accounting software from scratch using web2py python as backend and vanilla javascript as front end which then deployed using Google Cloud Platform '
        }
    ],
    educations: [
        {
            title: 'Universiti Teknikal Malaysia Melaka',
            date: 'Septermber 2017 - August 2021',
            description: ['GPA : 3.3','Utem Football Player(2018)','Bronze in Final year Project']
        },
        {
            title: 'Kolej Matrikulasi Johor',
            date: 'July 2020 - Jun 2021',
            description: ['GPA : 2.9','KMJ Football Player']
        },
        {
            title: 'Sekolah Menengah Sains Alam Shah (Asis)',
            date: 'March 2014 - December 2015',
            description: ['SPM : 5A3B1C']
        }
    ],
    services: [
        {
            title: 'Universiti Teknikal Malaysia Melaka',
            description: 'To develop a long term career that leads to futher growth in my professional skills and personal satisfaction by utilizing my skills and \nability to work for the growth of an organization ',
            icon: <WebOutlined/>
        },
        {
            title: 'Kolej Matrikulasi Johor',
            description: 'To develop a long term career that leads to futher growth in my professional skills and personal satisfaction by utilizing my skills and \nability to work for the growth of an organization ',
            icon: <AssignmentIndOutlined/>
        },
        {
            title: 'Illustrator',
            description: 'To develop a long term career that leads to futher growth in my professional skills and personal satisfaction by utilizing my skills and \nability to work for the growth of an organization ',
            icon: <WebOutlined/>
        }
    ],
    skills: [
        {
            title: 'FRONT-END',
            description: ['ReactJS','Javascript','HTML','CSS','Bootstrap']
        },
        {
            title: 'BACK END',
            description: ['Python']
        },
        {
            title: 'DATABASE',
            description: ['MySQL']
        },
        {
            title: 'SPOKEN LANGUAGE',
            description: ['English','Bahasa Malaysia']
        }
        
    ],
    portfolio: [
        {
            tag: 'Web Development',
            image: 'https://mybeezapp-7282cd.ingress-comporellon.easywp.com/wp-content/uploads/2021/07/MyBeezApp-Logo-3.png',
            title : 'MyBeezApp Accounting Software',
            description: 'I helped in developing this accouting software from scratch using web2py python even I dont have any accounting background. Manage the flow of the software, experiencing startup entrepreneurship on first hand and deployed using Google Cloud Platform',
            caption: 'Python, MySQL, HTML, CSS, Vanilla Javascript, Google Cloud Platform',
            links: [
                {link: 'https://app.mybeezapp.com/mba/default/user/login?_next=/mba/default/index',icon: <YouTube/>},
                {link: 'https://app.mybeezapp.com/mba/default/user/login?_next=/mba/default/index',icon: <GitHub/>},
                {link: 'https://app.mybeezapp.com/mba/default/user/login?_next=/mba/default/index',icon: <Language/>},
            ]
        },
        {
            tag: 'WordPress',
            image: 'https://mybeezapp-7282cd.ingress-comporellon.easywp.com/wp-content/uploads/2021/07/MyBeezApp-Logo-3.png',
            title : 'MyBeezApp Landing Page using Wordpress',
            description: 'Developing landing page for MyBeezApp Accounting Software using Wordpress, containing salesletter, FAQ and contact form',
            caption: 'Wordpress, Elementor, NinjaForm, NameCheap, Google Cloud Platform',
            links: [
                {link: 'https://mybeezapp-7282cd.ingress-comporellon.easywp.com',icon: <YouTube/>},
                {link: 'https://app.mybeezapp.com/mba/default/user/login?_next=/mba/default/index',icon: <GitHub/>},
                {link: 'https://app.mybeezapp.com/mba/default/user/login?_next=/mba/default/index',icon: <Language/>},
            ]
        },
        {
            tag: 'WordPress',
            image: 'http://quatronero.com/wp-content/uploads/2020/10/cropped-admin-ajax.php_-1-e1602599560576-6.png',
            title : 'Quatro Nero Landing Page using Wordpress',
            description: 'Developing Quatro Nero Sdn. Bhd. company landing page using wordpress',
            caption: 'Wordpress, Elementor, NinjaForm, NameCheap, Google Cloud Platform',
            links: [
                {link: 'http://quatronero.com/home/about/',icon: <YouTube/>},
                {link: 'https://app.mybeezapp.com/mba/default/user/login?_next=/mba/default/index',icon: <GitHub/>},
                {link: 'https://app.mybeezapp.com/mba/default/user/login?_next=/mba/default/index',icon: <Language/>},
            ]
        },
        {
            tag: 'WordPress',
            image: 'https://lovekiddyhouse.com/wp-content/uploads/2021/05/cropped-718F0CC5-E5C2-425F-B596-28CE52D7D12E-300x279.png',
            title : 'LoveKiddyHouse E-commerce using Wordpress',
            description: 'Developing E-commerce using wordpress for kid clothes',
            caption: 'Wordpress, Elementor, NinjaForm, NameCheap, Stripe, WooCommerce',
            links: [
                {link: 'https://lovekiddyhouse.com',icon: <YouTube/>},
                {link: 'https://app.mybeezapp.com/mba/default/user/login?_next=/mba/default/index',icon: <GitHub/>},
                {link: 'https://app.mybeezapp.com/mba/default/user/login?_next=/mba/default/index',icon: <Language/>},
            ]
        },
        {
            tag: 'Artificial Intelligence',
            image: 'https://globetechcdn.com/hospimedica/images/stories/articles/article_images/2019-07-17/SDD-796.jpg',
            title : 'Machine Learning to detect and diagnose Breast Cancer',
            description: 'This is my project final year project which involved 5 types of machine learning algorith which are Logistic Regression, SVM, K-Nearest Neighbors, Decision Tree and Random Forest. I tested all algorithm and compared the performance using data from Wisconsin University. This is deployed using Flask and model is build using Python',
            caption: 'Machine Learning, Python, Flask',
            links: [
                {link: 'https://app.mybeezapp.com/mba/default/user/login?_next=/mba/default/index',icon: <YouTube/>},
                {link: 'https://app.mybeezapp.com/mba/default/user/login?_next=/mba/default/index',icon: <GitHub/>},
                {link: 'https://app.mybeezapp.com/mba/default/user/login?_next=/mba/default/index',icon: <Language/>},
            ]
        },
        {
            tag: 'Artificial Intelligence',
            image: 'https://medicine.unimelb.edu.au/__data/assets/image/0008/3628088/Research-innovation-BRAIx-project.jpg',
            title : 'Deep Learning to detect Breast Cancer from Images',
            description: 'This is a side project to improvised from previous project as I used images and tensorflow to build the model. This time i used convolutional neural network and used many optimizer to get the best performance in terms of data cleaning and algorithm tested',
            caption: 'CNN, Python, Tensorflow',
            links: [
                {link: 'https://app.mybeezapp.com/mba/default/user/login?_next=/mba/default/index',icon: <YouTube/>},
                {link: 'https://app.mybeezapp.com/mba/default/user/login?_next=/mba/default/index',icon: <GitHub/>},
                {link: 'https://app.mybeezapp.com/mba/default/user/login?_next=/mba/default/index',icon: <Language/>},
            ]
        }
    ]

}