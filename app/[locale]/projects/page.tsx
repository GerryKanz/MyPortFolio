import styles from '@/app/[locale]/projects/page.module.css'
import Project from './projectComponent'
import ProjectsData from './projectsData';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';



export default function Projects() {
    const t = useTranslations("ProjectsPage")

    const projects = ProjectsData()

    return <div>

        <Link href={'/'} className={styles.backArrow}><FaArrowLeftLong /></Link>

        <div className={'pageTitle'}>
            <h1>{t('title')}</h1>
        </div>

        <div className={styles.pageLayout}>
            <nav className={styles.sidebar} aria-label={t('title')}>
                {projects.map((project, index) => (
                    <a key={index} className={styles.sidebarLink} href={`#project-${index}`}>
                        {project.name}
                    </a>
                ))}
            </nav>

            <div className={styles.projectsContainer}>
                {projects.map((project, index) => (
                    <Project key={index} id={`project-${index}`} {...project} />
                ))}
            </div>
        </div>

    </div >
}
