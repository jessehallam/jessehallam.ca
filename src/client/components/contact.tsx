import axios from 'axios'
import *  as noty from 'noty'
import * as React from 'react'

import { TextArea, TextBox } from './util/form'

interface OwnState {
    busy?: boolean
    message?: string
    name?: string
    phone?: string
}

export default class ContactComponent extends React.Component<{}, OwnState> {
    constructor(props) {
        super(props)
        this.state = {
            busy: false,
            message: '',
            name: '',
            phone: ''
        }
    }

    render() {
        const setValue = (name: string) => {
            return (value: string) => {
                this.setState({
                    [name]: value
                })
            }
        }

        return <section className="panel" id="me">
            <h1 className="barbottom">Contact</h1>
            <div className="contact">
                <div className="lhs">
                    <dl>
                        <dt>Email:</dt>
                        <dd><a href="mailto:contact@jessehallam.ca">contact@jessehallam.ca</a></dd>
                        <dt>Phone:</dt>
                        <dd><a href="tel:3433330018">343 333-0018</a></dd>
                    </dl>
                </div>
                <div className="rhs">
                    <form action="/send-mail" method="POST" onSubmit={e => this.onSubmit(e)}>
                        <div className="form-group input-wrapper">
                            <TextBox id='name' required value={this.state.name} change={setValue('name')} />
                            <label className="input-label" htmlFor="name">Name</label>
                        </div>

                        <div className="form-group input-wrapper">
                            <TextBox id='phone' required value={this.state.phone} change={setValue('phone')} />
                            <label className="input-label" htmlFor="phone">Phone / Email</label>
                        </div>

                        <div className="form-group input-wrapper">
                            <TextArea id='message' value={this.state.message} change={setValue('message')} />
                            <label className="input-label" htmlFor="message">Message</label>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" disabled={this.isDisabled()}>
                                {
                                    !this.state.busy 
                                        && <i className="material-icons"></i>
                                        || <i className="fa fa-spinner fa-spin"></i>
                                }
                                <span>Send Message</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    }

    private isDisabled() {
        return this.state.busy ||
            !this.state.message ||
            !this.state.name ||
            !this.state.phone
    }

    private onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        this.setState({ busy: true })
        
        const onComplete = () => {
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

        axios.post('/api/mail', {
            message: this.state.message,
            name: this.state.name,
            phone: this.state.phone
        })
            .then(onComplete)
            .catch(onComplete)
    }
}
