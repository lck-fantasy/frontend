import styles from './App.module.scss'
import '@/styles/base/_global.scss'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.app}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
