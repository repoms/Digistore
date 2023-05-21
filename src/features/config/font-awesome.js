
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faFaceFrownOpen,
    faMagnifyingGlass,
    faUser,
    faPeopleCarryBox,
} from '@fortawesome/free-solid-svg-icons'

const FaSetup = () => {
    library.add(
        faFaceFrownOpen,
        faMagnifyingGlass,
        faUser,
        faPeopleCarryBox,
    )
}

export default FaSetup
