import '../styles/globals.css'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../firebase"
import Login from '../pages/login'
import Loading from '../components/Loading'

function MyApp({ Component, pageProps }) {

  // get the users currently logged in
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />
  if (!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp
