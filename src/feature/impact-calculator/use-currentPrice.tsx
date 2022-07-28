import {useState, useEffect} from 'react'

export const useCurrentPrice = ({token, amount}: {token: string, amount: string}) => {
    const [price, setPrice] = useState(0)

    const getCurrentPrice = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/v1/api/currencies/current_price?pair_symbol=PING-${token}`
        )
        const data = await response.json();
        console.log(data)
    }

    useEffect(() => {
        getCurrentPrice()
    }, [])

    return {
        price
    }
}