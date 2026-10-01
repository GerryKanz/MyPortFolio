import styles from '@/app/[locale]/projects/page.module.css'
import Project from './projectComponent'
import ProjectsData from './projectsData';
import ScrollOffsetLayout from '../scrollOffsetLayout';
import { useTranslations } from 'next-intl';



export default function Projects() {
    const t = useTranslations("ProjectsPage")

    const projects = ProjectsData()

    return <div>

        <ScrollOffsetLayout
            pageLayoutClassName={styles.pageLayout}
            sidebarClassName={styles.sidebar}
            ariaLabel={t('title')}
            sidebarLinks={projects.map((project, index) => (
                <a key={index} className={styles.sidebarLink} href={`#project-${index}`}>
                    {project.navLabel}
                </a>
            ))}
        >
            <div className={styles.projectsContainer}>
                {projects.map((project, index) => (
                    <Project key={index} id={`project-${index}`} {...project} />
                ))}
            </div>
        </ScrollOffsetLayout>

    </div >
}
