import * as React from 'react'

export default class CarouselComponent extends React.Component {
    componentDidMount() {
        $('.owl-carousel').owlCarousel({
            navigation: true,
            slideSpeed: 1000,
            singleItem: true
        })
    }

    render() {
        return this.props.children
    }
}