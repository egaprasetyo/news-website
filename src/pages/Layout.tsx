import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='container mx-auto py-10'>
            {children}
        </main>
    )
}

export default Layout