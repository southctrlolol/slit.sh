import Image, { StaticImageData } from "next/image";
import styles from "./page.module.css";
import Profile from '../../public/profile.png'
import Grief from '../../public/grief.png'
import Cemetery from '../../public/cemetery.gif'
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Resent from '../../public/resent.png'


export default function Home() {
  return (
    <div className={styles['main']}>
      <div className={styles['me']}>
        <Image src={Profile} alt="Avatar" />
        <div className={styles['me-right']}>
            <span className={styles['name']}>Hello, I&apos;m sin</span>
          <span className={styles['description']}>I&apos;m a bot developer.</span>
        </div>
        <div className={styles['socials']}>
          <a href='https://github.com/evincement' className={styles['social']}>
            <FaGithub className={styles['social-icon']} />
            <span className={'social-name'}>GitHub</span>
          </a>
          <a href='https://discord.com/users/334593049319571456' className={styles['social']}>
            <FaDiscord className={styles['social-icon']} />
            <span className={'social-name'}>Discord</span>
          </a>
          <a href='mailto:contact@slit.sh' className={styles['social']}>
            <MdEmail className={styles['social-icon']} />
            <span className={'social-name'}>Email</span>
          </a>
        </div>
      </div>
      <span className={styles['projects-title']}>Projects</span>
      <div className={styles['projects']}>
        <Project
          title="resent"
          description="Versatile Discord Bot For Moderation, Social Commands, and More."
          image={Resent}
          link='https://resent.dev'
        />
        <Project
          title="grief"
          description="Versatile Discord Bot For Moderation, Social Commands, and More."
          image={Grief}
          link='https://grief.cloud'
        />
        <Project
          title="cemetery"
          description="a fun active community for meeting new friends"
          image={cemetery}
          link='https://discord.gg/cemetery'
        />
      </div>
    </div>
  );
}

const Project = ({ title, description, image, link }: { title: string, description: string, image: StaticImageData, link: string }) => {
  return (
    <a className={styles['project']} href={link} >
      <Image src={image} alt={title}/>
      <div className={styles['project-info']}>
        <span className={styles['project-title']}>{title}</span>
        <span className={styles['project-description']}>{description}</span>
      </div>
    </a>
  );
}
