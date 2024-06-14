import Link from "next/link";
import { Button, Timeline } from "antd";
import {useTranslations} from 'next-intl';
import styles from './page.module.css';

export default function Home() {
  const t = useTranslations('index');
  return (
    <main className={styles.home}>
        <div className={styles.content}>
          <h2>{t('log.title')}</h2>
          <div className={styles.timeBox}>
            <Timeline
              items={[
                {
                  children: t('log.1'),
                },
                {
                  children: t('log.2'),
                },
                {
                  children: t('log.3'),
                },
                {
                  color: 'orange',
                  children: t('log.4'),
                },
                {
                  color: 'orange',
                  children: t('log.5'),
                },
                {
                  color: 'orange',
                  children: t('log.6'),
                },
                {
                  color: 'orange',
                  children: t('log.7'),
                }
              ]}
            />
          </div>

          <div>
            <Link href="/dashboard" style={{marginRight: 20}}><Button type="primary">dashboard</Button></Link>
            <Link href="/user" style={{marginRight: 20}}><Button type="primary">user</Button></Link>
            <Link href="/dashboard/monitor" style={{marginRight: 20}}><Button type="primary">/dashboard/monitor</Button></Link>
          </div>
        </div>
        
      
    </main>
  );
}