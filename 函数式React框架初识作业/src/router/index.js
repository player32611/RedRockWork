import Main from '../page/Main'
import New from '../page/New'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        index: true,
        element: <Main />
    },
    {
        path: '/new',
        element: <New />
    }
])

export default router