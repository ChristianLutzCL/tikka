import '../styles/globals.css'
import {useState, useEffect} from 'react'
import {UserContext} from '../components/user'
import {supabase} from '../utils/supabaseClient'
import {useRouter} from 'next/router'
import Loading from '../components/loading'
import Script from 'next/script'
import LoadingDashboard from '../components/loadingDashboard'
import { ThemeProvider } from "next-themes";

export default function MyApp({Component, pageProps}) {
  const session = supabase.auth.session()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false)
    }

    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '1422594004876612',
        cookie: true,
        xfbml: true,
        version: 'v7.0',
      })
      FB.AppEvents.logPageView()
    }
  }, [])

  useEffect(() => {
    if (!session && pageProps.protected) {
      router.push('/login')
    }

    if (session && pageProps.auth) {
      router.push('/publish/home')
    }

    setUser(session)
  }, [pageProps.protected, pageProps.auth, session, router])

  return (
    <>
      {!loading ? (
        <UserContext.Provider value={user}>
          <ThemeProvider enableSystem={true} attribute="class">
              <Component {...pageProps} />
          </ThemeProvider>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-150JVRRET9"></Script>
          <Script
            id="gtag-base"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer', 'G-150JVRRET9');
              `,
            }}
          />
          <Script
            async
            defer
            crossOrigin='anonymous'
            src='https://connect.facebook.net/en_US/sdk.js'
          />
        </UserContext.Provider>
      ) : (
        !pageProps.protected ? (
        <Loading loading={loading} />
        ) : (
        <LoadingDashboard loading={loading} />
        )
      )}
    </>
  )
}
