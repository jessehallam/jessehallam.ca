import * as React from 'react'

interface ModalProps {
    render: () => JSX.Element
}

class Modal extends React.Component<ModalProps> {
    private div: HTMLDivElement

    componentDidMount() {
        $(this.div).modal('show')
    }

    render() {
        return (
            <div
                ref={div => (this.div = div)}
                className='modal fade'
                tabIndex={-1}
                role='dialog'
            >
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>{this.props.render()}</div>
                </div>
            </div>
        )
    }
}

export default Modal
