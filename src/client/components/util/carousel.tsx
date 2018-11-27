import * as React from 'react'

interface OwnProps {}
interface OwnState {}

export default class Carousel extends React.Component<OwnProps, OwnState> {
    private div: HTMLDivElement

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const target = $(this.div)
        if (target && target.length) {
            target.owlCarousel({
                navigation: true,
                singleItem: true,
                slideSpeed: 1000
            })
        }
    }

    render() {
        return <div ref={div => (this.div = div)}>{this.props.children}</div>
    }
}
