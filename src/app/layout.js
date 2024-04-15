import './globals.css'
// import Header from './_components/Header'
import Footer from './_components/Footer'
import Navigation from './_components/Navigation'
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className=""><Navigation></Navigation>{children}<Footer />
      </body>
    </html>
  )
}
