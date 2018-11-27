import * as React from 'react'

interface TextBoxProps {
    change?: (value: string) => void
    id: string
    required?: boolean
    value?: any
}

export function TextArea(props: TextBoxProps) {
    const onChange = (value: string) => {
        if (props.change) props.change(value)
    }

    let className = 'form-control'
    if (props.value) className += ' has-value'

    return (
        <textarea
            className={className}
            id={props.id}
            name={props.id}
            required={props.required}
            value={props.value}
            onChange={e => onChange(e.target.value)}
        />
    )
}

export function TextBox(props: TextBoxProps) {
    const onChange = (value: string) => {
        if (props.change) props.change(value)
    }

    let className = 'form-control'
    if (props.value) className += ' has-value'

    return (
        <input
            type='text'
            className={className}
            id={props.id}
            name={props.id}
            required={props.required}
            value={props.value}
            onChange={e => onChange(e.target.value)}
        />
    )
}
