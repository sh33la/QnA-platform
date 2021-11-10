import React from 'react'
import Body from './Body'
import Header from './Header'

function HomePage() {

    // const [data,setData] = useState({})

    // const callBackEndAPI =  async () => {
    //     const response = await fetch('http://localhost:8000/')
    //     // const response = await fetch('/')
    //     const body = await response.json();
    //     if(response.status!==200){
    //         throw Error(body.message)
    //     }
    //     return body
    // }

    // useEffect(()=>{
    //     callBackEndAPI().
    //     then(res => {console.log(res); setData(res)}).
    //     catch(err => console.log(err))
    // },[])

    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

export default HomePage
