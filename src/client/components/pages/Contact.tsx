import * as React from 'react'

import axios from 'axios'
import * as noty from 'noty'

import { TextArea, TextBox } from '../util/form'

const config: config.HomeConfig = require('../../config/home.json')

interface OwnProps {}
interface OwnState {
    busy: boolean
    name: string
    phone: string
    message: string
}

class ContactComponent extends React.Component<OwnProps, OwnState> {
    readonly state: OwnState = {
        busy: false,
        message: '',
        name: '',
        phone: ''
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className='panel' id='me'>
                <h1 className='barbottom'>Contact</h1>
                <div className='contact'>
                    <div className='lhs'>
                        <ContactItems />
                    </div>
                    <div className='rhs'>
                        <form
                            action='/send-mail'
                            method='post'
                            onSubmit={this.onSubmit}
                        >
                            <div className='form-group input-wrapper'>
                                <TextBox
                                    id='name'
                                    required
                                    value={this.state.name}
                                    change={this.onNameChange}
                                />
                                <label className='input-label' htmlFor='name'>
                                    Name
                                </label>
                            </div>

                            <div className='form-group input-wrapper'>
                                <TextBox
                                    id='phone'
                                    required
                                    value={this.state.phone}
                                    change={this.onPhoneChange}
                                />
                                <label className='input-label' htmlFor='phone'>
                                    Phone / Email
                                </label>
                            </div>

                            <div className='form-group input-wrapper'>
                                <TextArea
                                    id='message'
                                    value={this.state.message}
                                    change={this.onMessageChange}
                                />
                                <label
                                    className='input-label'
                                    htmlFor='message'
                                >
                                    Message
                                </label>
                            </div>

                            <div className='form-group'>
                                <SubmitButton
                                    busy={this.state.busy}
                                    disabled={!this.valid()}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }

    private onComplete = () => {
        new noty({
            text: 'Thanks for reaching out!',
            theme: 'mint',
            timeout: 3000,
            type: 'success'
        }).show()

        this.setState({
            busy: false,
            message: '',
            name: '',
            phone: ''
        })
    }

    private onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        this.setState({ busy: true })
        const payload = {
            message: this.state.message,
            name: this.state.name,
            phone: this.state.phone
        }
        axios.post('/api/mail', payload).then(this.onComplete, this.onComplete)
        return false
    }

    private valid = () =>
        this.state && this.state.name && this.state.phone && this.state.message

    private onNameChange = (name: string) => this.setState({ name })
    private onMessageChange = (message: string) => this.setState({ message })
    private onPhoneChange = (phone: string) => this.setState({ phone })
}

function ContactItems() {
    const contactItems = config.info.reduce(
        (elements, item, i) => {
            elements.push(<dt key={'dt-' + i}>{item.name}:</dt>)
            elements.push(
                <dd key={'dd-' + i}>
                    {item.href && <a href={item.href}>{item.value}</a>}
                    {!item.href && item.value}
                </dd>
            )
            return elements
        },
        [] as JSX.Element[]
    )

    return <dl>{contactItems}</dl>
}

function SubmitButton({
    busy,
    disabled
}: {
    busy: boolean
    disabled: boolean
}) {
    return (
        <button type='submit' className='btn btn-primary' disabled={disabled}>
            {busy && <i className='fa fa-spinner fa-spin' />}
            {!busy && <i className='material-icons'></i>}
            <span>Send Message</span>
        </button>
    )
}

export default ContactComponent
