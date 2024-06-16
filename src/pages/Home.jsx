// import React from 'react'

import { useContext } from "react"
import Top from "../components/Top"
import { DataContext } from "../App"
import Content from "../components/Content";

const Home = () => {
    const data = useContext(DataContext);
    return (
        <>
            <Top />
            <div>
                {data.map((item) => {
                    if (item.view === false) return null;
                    return (
                        <Content key={item.packTitle} item={item} />
                    )
                }
                )}
            </div>
        </>
    )
}

export default Home
