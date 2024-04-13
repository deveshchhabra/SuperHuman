import './globals.css'
import Header from './_components/Header'
import Footer from './_components/Footer'
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className=""><Header/>{children}<Footer />
      </body>
    </html>
  )
}
