import PositionAnchor from './PositionAnchor'
import assert from 'assert'

global.window = {
    requestAnimationFrame(callback) {
        callback()
        return 0
    }
}

it("tests PositionAnchor", function (done) {
    let ca = new PositionAnchor()

    ca.props = {

        element: () => ({
            x: () => 0,
            y: () => 0,
            getClientRect: () => ({
                x: 0,
                y: 0,
                width: 20,
                height: 20
            })
        }),

        elementOrigin: { x: 0.5, y: 0.5 },
        elementDesiredOrigin: { x: 0.5, y: 0.5 },

        reference: () => ({
            x: () => 0,
            y: () => 0,
            getClientRect: () => ({
                x: 0,
                y: 0,
                width: 200,
                height: 50
            })
        }),
        referenceOrigin: { x: 0, y: 0 },
        referenceDesiredOrigin: { x: 1, y: 0 },


        shift: { x: -25, y: 0 },
        change: (x, y) => {

            assert.equal(x, 175)
            assert.equal(y, 0)
            done()
        }
    }


})