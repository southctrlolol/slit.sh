import Image, { StaticImageData } from "next/image";
import styles from "./page.module.css";
import Chippy from '../../public/Chippy.png'
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.me}>
        <Image src={Chippy} alt="Avatar" />
        <div className={styles['me-right']}>
          <span className={styles.name}>Hello, I'm ctrl</span>
          <span className={styles.description}>I'm a bot developer.</span>
        </div>
        <div className={styles.socials}>
          <a href='https://github.com/evincement' className={styles.social}>
            <FaGithub className={styles['social-icon']} />
            <span className={styles['social-name']}>GitHub</span>
          </a>
          <a href='https://discord.com/users/1252001166703853588' className={styles.social}>
            <FaDiscord className={styles['social-icon']} />
            <span className={styles['social-name']}>Discord</span>
          </a>
          <a href='mailto:contact@slit.sh' className={styles.social}>
            <MdEmail className={styles['social-icon']} />
            <span className={styles['social-name']}>Email</span>
          </a>
        </div>
      </div>
      <span className={styles['projects-title']}>Projects</span>
      <div className={styles.projects}>
        <Project
          title="Chippy"
          description="versatile Discord Bot For moderation, social commands, and more"
          image={Chippy}
          link='https://discord.gg/CNSYxykkVg'
        />
      </div>
    </div>
  );
}

const Project = ({ title, description, image, link }: { title: string, description: string, image: StaticImageData, link: string }) => {
  return (
    <a className={styles.project} href={link} >
      <Image src={image} alt={title} />
      <div className={styles['project-info']}>
        <span className={styles['project-title']}>{title}</span>
        <span className={styles['project-description']}>{description}</span>
      </div>
    </a>
  );
}
