import Home from "./home/Index"
import TShirt from "./t-shirt/Index"



const routes:Array<any> = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/t-shirt',
        element: <TShirt />
    }
]

export default routes;