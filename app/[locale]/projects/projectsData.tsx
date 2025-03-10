import { useTranslations } from "next-intl"

export default function ProjectsData() {
    const t = useTranslations('ProjectsPage')

    const projects = [

        {
            name: 'Nail Salon Booking App (Beta)',

            imagePath: '/theNailSalonApp.png',
            discription: t("nailSalonDescript"),
            technologies: 'React Native, JavaScript, CSS, Clerk, GraphQL',
            projectLinks: {
                youtubeLink: 'https://youtu.be/iBS_5fEgYm8',
                youtubeLinkEmbedded: "https://www.youtube.com/embed/iBS_5fEgYm8?si=s8etBdnBBvXAroCI&amp;start=12",
                expoLink: 'https://expo.dev/preview/update?message=v1.0.3%20Beta&updateRuntimeVersion=1.0.0&createdAt=2025-03-03T09%3A30%3A00.895Z&slug=exp&projectId=6f5a2d47-8e58-4c17-990b-50b1bb6214f5&group=7a96b647-69b3-43cf-a307-416a135fef2f',
                github: 'https://github.com/GerryKanz/nailSalon'
            }

        },

        {
            name: 'Portfolio site',

            imagePath: '/Portfoliosite.png',
            discription: t("portfolioAppDescript"),
            technologies: 'NextJs (React), Typescript, CSS',
            projectLinks: {
                github: 'https://github.com/GerryKanz/MyPortFolio'
            }

        },

        {
            name: 'Weather App (Beta)',

            imagePath: '/weatheapp.png',
            discription: t("weatherAppDescript"),
            technologies: 'Next.js (React), TypeScript, Tailwind',
            projectLinks: {
                youtubeLink: 'https://youtu.be/iBS_5fEgYm8',
                expoLink: 'https://weather-app-git-main-gerald-kanzaras-projects.vercel.app/',
                github: 'https://github.com/GerryKanz/Weather-app/tree/main/app'
            }
        },
        {
            name: 'Food App (Beta)',

            imagePath: '/foodAppImg.png',
            discription: t('foodAppDescript'),
            technologies: 'Javascript, HTML, CSS and ReactNative',
            projectLinks: {
                expoLink: 'https://expo.dev/preview/update?message=v1.0%20Beta&updateRuntimeVersion=1.0.0&createdAt=2025-02-25T13%3A11%3A05.322Z&slug=exp&projectId=be732391-d631-4d40-a1d2-7a5fe7a53951&group=590169eb-988a-4095-93c2-5656361999c2',
                github: 'https://github.com/GerryKanz/nailSalon'
            }

        },
        {
            name: 'Calculator (Beta)',

            imagePath: '/calculatorApp.png',
            discription: t("calculator"),
            technologies: 'JavaScript, ReactNative, HTML, CSS',
            projectLinks: {
                expoLink: 'https://expo.dev/preview/update?message=read%20me&updateRuntimeVersion=1.0.0&createdAt=2025-03-02T05%3A36%3A39.956Z&slug=exp&projectId=559e26ba-0db3-440d-8b1e-2a1502c3f35a&group=8a10c122-b47c-4169-8061-c2ca6816af2d',
                github: 'https://github.com/GerryKanz/Calculator-react-native'
            }

        },
        {
            name: 'Bird Classication Model Deep Neural Network (Beta)',

            imagePath: '/BirdClassicationModel.png',
            discription: t('birdClassificationDescript'),
            technologies: 'Python, TensorFlow Keras Library, MatplotLib, Pandas and Numpy',
            projectLinks: {
                github: 'https://github.com/GerryKanz/Final-project-image-classification-model/blob/main/final_project_ML.ipynb'
            }
        }
    ]
    return projects
}