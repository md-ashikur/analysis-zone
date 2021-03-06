import { useEffect, useState } from "react"

const useCart = () =>{
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('reviewDetails.json')
        .then(res => res.json())
        .then(data => setCart(data));
    }, []);

    return [cart, setCart];
}
export default useCart;