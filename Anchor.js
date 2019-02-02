import React from 'react'

class Anchor extends React.Component {
    constructor(props) {
        super(props)

        this.update = () => {
            console.error("Anchor: update is not implemented");
        }

        setTimeout(() => {
            window.requestAnimationFrame(this.update)
        }, 0)
    }

    componentWillUpdate() {
        this.update()
    }

    render() {
        return null
    }
}

export default Anchor