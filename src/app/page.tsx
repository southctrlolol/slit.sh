import Image, { StaticImageData } from "next/image";
import styles from "./page.module.css";
import Profile from '../../public/profile.jpg'
import RaidHub from '../../public/RaidHub.png'
import Felony from '../../public/Felony.jpg'
import Loti from '../../public/Loti.gif'
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Home() {
  return (
    <div className={styles['main']}>
      <div className={styles['me']}>
        <Image src={Profile} alt="Avatar" />
        <div className={styles['me-right']}>
            <span className={styles['name']}>Hello, I&apos;m Samuel Davis</span>
          <span className={styles['description']}>I&apos;m a Software Engineer & Web Developer.</span>
        </div>
        <div className={styles['socials']}>
          <a href='https://github.com/NotBruce' className={styles['social']}>
            <FaGithub className={styles['social-icon']} />
            <span className={'social-name'}>GitHub</span>
          </a>
          <a href='https://discord.com/users/771891131499675668' className={styles['social']}>
            <FaDiscord className={styles['social-icon']} />
            <span className={'social-name'}>Discord</span>
          </a>
          <a href='mailto:me@notbruce.dev' className={styles['social']}>
            <MdEmail className={styles['social-icon']} />
            <span className={'social-name'}>Email</span>
          </a>
        </div>
      </div>
      <span className={styles['projects-title']}>Projects</span>
      <div className={styles['projects']}>
        <Project
          title="RaidHub"
          description="A fast website that provides raid statistics like completions, lowmans and much more to come"
          image={RaidHub}
          link='https://raidhub.io/'
        />
        <Project
          title="Loti"
          description="Versatile Discord Bot For Moderation, Social Commands, and More!"
          image={Loti}
          link='https://www.loti.dev/'
        />
        <Project
          title="Felony"
          description="Versatile Discord Bot For Moderation, Social Commands, and More!"
          image={Felony}
          link='https://felony.me/'
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
