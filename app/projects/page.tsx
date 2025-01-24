import styles from '@/app/page.module.css'
import Project from './projectComponent'
import { projectData } from './projectsData';


export default function Projects() {

    return <div>
        <p className={styles.pageTitle}>Personal Projects</p>
        <Project {...projectData} />
    </div >
}