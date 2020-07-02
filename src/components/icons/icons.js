import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlusCircle,
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faLock,
  faHome,
  faMobileAlt,
  faCodeBranch,
  // faLinkedin,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock,
    faHome,
    faMobileAlt,
    // faLinkedin,
    // faGithub,
    faCodeBranch,
    faUserTie
  )
}

export default Icons
