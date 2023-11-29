import './App.scss'
import '@/styles/base/_global.scss'
import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}
