import Anchor from './Anchor'

class WidthAnchor extends Anchor {

    constructor(props) {
        super(props)
        this.update = () => {

            if (this.props.reference() && this.props.element()) {
                let elementRect = this.props.element().getClientRect()
                let referenceRect = this.props.reference().getClientRect()
                let padding = this.props.padding ? this.props.padding * 2 : 0
                if (elementRect.width !== referenceRect.width + padding) {

                    this.props.change(referenceRect.width + padding)
                }
            }
        }
    }
}

export default WidthAnchor