import React from 'react'
import Anchor from './Anchor'

class PositionAnchor extends Anchor {

    constructor(props) {
        super(props)
        this.update = () => {
            if (this.props.reference() && this.props.element()) {


                let p = {
                    x: this.props.element().x(),
                    y: this.props.element().y()
                }

                let newPos = this.newPos()

                if (Math.round(newPos.x) !== Math.round(p.x) || Math.round(newPos.y) !== Math.round(p.y)) {
                    this.props.change(newPos.x, newPos.y)
                }
            }

        }
    }

    newPos() {
        let referenceRect = this.props.reference().getClientRect()
        let elementRect = this.props.element().getClientRect()

        // reference
        let R = {
            p: { x: this.props.reference().x(), y: this.props.reference().y() }, //pos
            o: { x: 0, y: 0 }, //originalOrigin
            d: { x: 0, y: 0 }, //desiredOrigin
            s: {
                x: referenceRect.width,
                y: referenceRect.height
            }, //size
        }

        if (this.props.referenceOrigin !== undefined)
            R.o = this.props.referenceOrigin
        if (this.props.referenceDesiredOrigin !== undefined)
            R.d = this.props.referenceDesiredOrigin


        //element
        let E = {
            p: { x: this.props.element().x(), y: this.props.element().y() }, //pos
            o: { x: 0, y: 0 }, //originalOrigin
            d: { x: 0, y: 0 }, //desiredOrigin
            s: {
                x: elementRect.width,
                y: elementRect.height
            }, //size
        }

        if (this.props.elementOrigin !== undefined)
            E.o = this.props.elementOrigin
        if (this.props.elementDesiredOrigin !== undefined)
            E.d = this.props.elementDesiredOrigin

        //shift
        let S = { x: 0, y: 0 }

        if (this.props.shift !== undefined)
            S = this.props.shift

        let res
        res = this.sub(R.p, this.mul(R.o, R.s))
        res = this.add(res, this.mul(R.d, R.s))
        res = this.add(res, this.mul(E.o, E.s))
        res = this.sub(res, this.mul(E.d, E.s))
        res = this.add(res, S)

        return res
    }



    add(A, B) {
        return {
            x: A.x + B.x,
            y: A.y + B.y
        }
    }


    sub(A, B) {
        return {
            x: A.x - B.x,
            y: A.y - B.y
        }
    }

    mul(A, B) {
        return {
            x: A.x * B.x,
            y: A.y * B.y
        }
    }
}

export default PositionAnchor