import TreeDemo from '../components/Tree'
import ButtonDemo from '../components/Button'
import MockDemo from '../components/MockData'
import RequestDemo from '../components/RequestData'
import FormPage from '../pages/form/index'
import EventPage from '../pages/HandleEvent/Parent'

const routeConfig = [
    { path:"/tree",component:TreeDemo },
    { path:"/button",component:ButtonDemo },
    { path:"/mock",component:MockDemo },
    { path:"/request",component:RequestDemo },
    { path:"/form",component:FormPage },
    { path:"/event",component:EventPage },
]

export default routeConfig