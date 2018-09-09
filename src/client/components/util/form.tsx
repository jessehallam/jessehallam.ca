import * as React from 'react'

interface TextBoxProps {
    change?: (value: string) => void
    id: string
    required?: boolean
    value?: any
}

export function TextArea(props: TextBoxProps) {
    const onChange = (val: string) => {
        if (props.change) props.change(val)
    }

    let className = 'form-control'
    if (props.value)
        className += ' has-value'

    return <textarea className={className}
        id={props.id}
        name={props.id}
        required={props.required}
        value={props.value}
        onChange={e => onChange(e.target.value)} />
}

export function TextBox(props: TextBoxProps) {
    const onChange = (val: string) => {
        if (props.change) props.change(val)
    }

    let className = 'form-control'
    if (props.value)
        className += ' has-value'

    return <input className={className} type='text' 
        id={props.id}
        name={props.id}
        required={props.required}
        value={props.value}
        onChange={e => onChange(e.target.value)} />
}