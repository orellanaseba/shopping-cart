import { useEffect, useState } from "react"
import { Link, useOutletContext } from "react-router-dom"
import Header from "../components/Header"
import Card from "../components/Card"
import Loading from "../components/Loading"

const Electronics = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const { addToCart } = useOutletContext()

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/electronics")
        .then(res => res.json())
        .then(data => setData(data))
        .finally(() => setLoading(false))
    }, [])

    if(loading) return <Loading />
    
    return (
        <>
            <Link to="/products" className="text-blue-700 inline-block"><u>Go back</u></Link>
            <h1 className="text-center text-2xl font-medium mb-1">Electronics</h1>
            <section className="bg-white p-2 flex justify-start items-start w-[80%] min-h-[500px] mx-auto rounded-lg flex-wrap gap-5">
                {
                    data && data.map(res => (
                    <Card
                    key={res.id}
                    title={res.title}
                    price={res.price}
                    image={res.image}
                    addToCart={() => addToCart(res)}
                    />
                ))
                }
            </section>
        </>
    )
}


export default Electronics