import * as React from 'react'

interface OwnProps {
    slides: string[]
}
interface OwnState {}

export default class Carousel extends React.Component<OwnProps, OwnState> {
    private div: HTMLDivElement

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('Mounting carousel on ', this.div)
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
        const items = this.props.slides.map((slide, i) => (
            <div className='item' key={'slide-' + i}>
                <img alt='' src={slide} />
            </div>
        ))
        return (
            <div
                className='owl-carousel owl-theme'
                ref={div => (this.div = div)}
            >
                {items}
            </div>
        )
    }
}
