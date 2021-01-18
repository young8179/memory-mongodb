import React from 'react'

export default function BaseLayout(props) {
    return (
        <div>
            <header>
                head
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                footer
            </footer>
        </div>
    )
}
