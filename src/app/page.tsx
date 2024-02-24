import Image, { StaticImageData } from "next/image";
import styles from "./page.module.css";
import Profile from '../../public/profile.png'
import Grief from '../../public/grief.png'
import Yor from '../../public/yor.png'
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


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
          
const Project = ({ title, description, image, link }: { title: string, description: string, image: StaticImageData, link: string }) => {
  return (
    <a className={styles['project']} href={link} >
      <Image src={image} alt={title}/>
    </a>
  );
}
