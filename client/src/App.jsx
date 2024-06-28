import Route from  './Route'
import axios from 'axios'
import {UserContextProvider} from './UserContext'

function App() {
  axios.defaults.baseURL = "https://chat-app-repo-api.vercel.app"
  axios.defaults.withCredentials = true
  return (
    <>
      <UserContextProvider>
        <Route/>
      </UserContextProvider>
    </>
  );
}

export default App
