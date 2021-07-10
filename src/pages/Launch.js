import React from 'react'
import { Outlet } from 'react-router'

const Launch = () => {
    return (
        <div>
            <h2>Launch</h2>
            <Outlet />
        </div>
    )
}

export default Launch
