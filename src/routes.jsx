import App from "./App";
import ManSection from "./category/ManSection";
import WomanSection from "./category/WomanSection";
import Products from "./components/Products";
import Jewelery from "./category/Jewelery";
import Electronics from "./category/Electronics";
import Home from "./components/Home";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "products", element: <Products /> },
            { path: "products/category/man", element: <ManSection /> },
            { path: "products/category/woman", element: <WomanSection /> },
            { path: "products/category/jewelery", element: <Jewelery /> },
            { path: "products/category/electronics", element: <Electronics /> },
        ]
    },

    
    
]

export default routes