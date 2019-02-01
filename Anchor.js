import React from 'react'

class Anchor extends React.Component {
    constructor(props) {
        super(props)

        setTimeout(() => {
            window.requestAnimationFrame(this.update)
        }, 0)
    }

    update = () => {
        console.error("Anchor: update is not implemented");
    }

    componentWillUpdate() {
        this.update()
    }

    render() {
        return null
    }
}

export default Anchor