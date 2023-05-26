
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faFaceFrownOpen,
    faMagnifyingGlass,
    faUser,
    faPeopleCarryBox,
    faCartShopping,
    faClipboard,
    faShop,
    faGear,
    faChevronDown,
    faGifts,
    faCirclePlus,
    faParachuteBox,
    faPlus,
    faXmark,
    faCircleCheck,
} from '@fortawesome/free-solid-svg-icons'

const FaSetup = () => {
    library.add(
        faCircleCheck,
        faXmark,
        faPlus,
        faParachuteBox,
        faGifts,
        faCirclePlus,
        faFaceFrownOpen,
        faMagnifyingGlass,
        faUser,
        faPeopleCarryBox,
        faCartShopping,
        faClipboard,
        faShop,
        faGear,
        faChevronDown,
    )
}

export default FaSetup
