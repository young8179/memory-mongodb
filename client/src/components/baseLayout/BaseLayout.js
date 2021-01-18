import React from 'react'

export default function BaseLayout(props) {
    return (
        <div>
            <header>
                
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                
            </footer>
        </div>
    )
}
