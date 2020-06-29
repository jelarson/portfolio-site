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
  faCodeBranch,
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
    faCodeBranch,
    faUserTie
  )
}

export default Icons
