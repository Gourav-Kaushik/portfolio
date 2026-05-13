/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gourav Kaushik",
  title: "Hi all, I'm Gourav",
  subTitle: emoji(
    "A motivated Computer Science undergraduate specializing in AI & Data Science 🚀 Passionate about building intelligent systems, voice assistants, and deriving insights from data using Python / OpenCV / MediaPipe / SQL and other cool tools."
  ),
  resumeLink:
    "./Gourav_Resume.pdf.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Gourav-Kaushik",
  linkedin: "https://www.linkedin.com/in/gouravkaushik/",
  gmail: "gouravkaushik122@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI & DATA SCIENCE ENTHUSIAST WHO LOVES BUILDING INTELLIGENT SYSTEMS",
  skills: [
    emoji(
      "⚡ Build AI-powered applications using Python, OpenCV, and MediaPipe"
    ),
    emoji("⚡ Develop voice assistants and automation tools with SpeechRecognition & pyttsx3"),
    emoji(
      "⚡ Data analysis and visualization using Tableau, Pandas, and NumPy"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "windows",
      fontAwesomeClassname: "fab fa-windows"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Guru Jambheshwar University of Science & Technology (GJUST)",
      logo: require("./assets/images/gjustLogo.png"),
      subHeader: "Bachelor of Technology – Artificial Intelligence & Data Science",
      duration: "2025 – Present",
      desc: "Specializing in AI/ML, Data Engineering, and intelligent system design.",
      descBullets: [
        "Studying core AI & Data Science concepts including Machine Learning, Deep Learning, and Data Analytics",
        "Working on hands-on projects involving Computer Vision and Voice Assistants"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python & AI/ML",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Analytics (Tableau, Pandas, NumPy)",
      progressPercentage: "75%"
    },
    {
      Stack: "Computer Vision (OpenCV, MediaPipe)",
      progressPercentage: "70%"
    },
    {
      Stack: "SQL & Databases",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME COOL PROJECTS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/fridayAiLogo.png"),
      projectName: "Friday-AI – Python Voice Assistant",
      projectDesc: "Wake-word triggered voice assistant using SpeechRecognition and pyttsx3. Automates tasks like opening websites, playing music, and responding to voice commands. Features a double-clap detector and silent background autostart.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Gourav-Kaushik/Friday-AI"
        }
      ]
    },
    {
      image: require("./assets/images/gestureRecognitionLogo.png"),
      projectName: "Real-Time Gesture Recognition",
      projectDesc: "Built using OpenCV and MediaPipe to track fingertip positions via webcam in real time. Detects hand landmarks and computes inter-finger distances for gesture classification.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Gourav-Kaushik/gesture-recognition"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications & Virtual Experience 🏆 "),
  subtitle:
    "Certifications, Job Simulations, and Workshops that I have completed!",

  achievementsCards: [
    {
      title: "Deloitte Australia – Data Analytics Job Simulation",
      subtitle:
        "Completed a Deloitte job simulation involving data analysis and forensic technology. Created a Tableau dashboard and used Excel for data classification and business insights.",
      image: require("./assets/images/deloitteLogo.png"),
      imageAlt: "Deloitte Logo",
      footerLink: [
        {
          name: "Forage – March 2026",
          url: "https://www.linkedin.com/posts/gourav-kaushik-_forage-certificate-ugcPost-7442873419421007872-zyKp?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAF8dXxoBqj-vgwqenvzYRLzxozzhmrNR_E0"
        }
      ]
    },
    {
      title: "Cloud Computing Workshop",
      subtitle:
        "Attended hands-on workshop covering cloud fundamentals and AWS services at GJUST, February 2026.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Cloud Logo",
      footerLink: [
        {
          name: "GJUST – February 2026",
          url: "https://www.linkedin.com/posts/gourav-kaushik-_cloudcomputing-linux-aws-ugcPost-7433758305245917185-9_qa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF8dXxoBqj-vgwqenvzYRLzxozzhmrNR_E0"
        }
      ]
    },
    {
      title: "Web Application Pentesting Masterclass",
      subtitle:
        "Attended a comprehensive Web Application Pentesting Masterclass organized by CyberPhoenix Club.",
      image: require("./assets/images/phenoxiclub.png"),
      imageAlt: "CyberPhoenix Club",
      footerLink: [
        {
          name: "CyberPhoenix Club",
          url: "https://www.linkedin.com/posts/gourav-kaushik-_cyberphoenix-club-activity-7389566430733729792-Jr0U?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAF8dXxoBqj-vgwqenvzYRLzxozzhmrNR_E0"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "gouravkaushik122@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
