import React from 'react'

type useChangeHandlerI = () => [string, (value: string) => void]

interface InputProps {
    text: string
    //Такая аннотация подтверждает наличие данных ключей в типе что гарантирует безопастност 
    type?: Extract<"text" | "password", React.HTMLInputTypeAttribute>
    className? : string
    useChangeHandler: useChangeHandlerI

}

const Input = (props: InputProps) => {

    const [value,setValue] = props.useChangeHandler();

    return (
        <div
            className={'flex items-end '+ props.className}
        >
            <label 
            htmlFor={props.text}
            className='w-40'
            >
                {props.text}
            </label>
            <input 
            type={props.type || "text"}
            id={props.text} 
            value={value}
            onChange={(e) => {
                setValue(e.target.value)
            }} 
            className='w-30 h-10 ml-10 '  />
        </div>
    )
}

export { Input }   