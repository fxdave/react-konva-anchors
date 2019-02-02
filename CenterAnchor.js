import React from 'react'
import Anchor from './Anchor'

class CenterAnchor extends Anchor {
    constructor(props) {
        super(props)


        this.update = () => {
            if (this.props.element()) {


                let elementRect = this.props.element().getClientRect()
                let x = this.props.element().x()
                let y = this.props.element().y()
                let newX = - elementRect.width / 2
                let newY = - elementRect.height / 2

                if (x !== newX || y !== newY) {
                    this.props.change(newX, newY)
                }
            }
        }
    }
}

export default CenterAnchor