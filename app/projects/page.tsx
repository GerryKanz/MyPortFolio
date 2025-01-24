import styles from '@/app/page.module.css'
import Project from './projectComponent'
import { projects } from './projectsData';


export default function Projects() {

    return <div>
        <p className={styles.pageTitle}>Personal Projects</p>
        <Project {...projects[0]} />
        <Project {...projects[1]} />
    </div >
}