import Anchor from './Anchor'

/*
    <CustomAnchor 
        reference={ () => this.bg.current }
        element={ () => this.button.current }
        result={ (ref) => ({ x: ref.width(), y:0 }) }
        isUpdateNeeded={ (el, res) => el.x() !== res.x || el.y() !== res.y  }
        change={ (res) => { this.setState({ buttonPos: res }) } }
    />   
*/

class CustomAnchor extends Anchor {

    constructor(props) {
        super(props)
        this.update = () => {

            if (this.props.reference() && this.props.element()) {
                let res = this.props.result(this.props.reference())
                if (this.props.isUpdateNeeded(this.props.element(), res)) {
                    this.props.change(res)
                }
            }
        }
    }

}

export default CustomAnchor