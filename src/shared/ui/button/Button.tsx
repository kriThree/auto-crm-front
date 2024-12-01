

interface ButtonProps {
    text: string
    onClick: () => void
    className?: string
}

const Button = (props: ButtonProps) => {
    return (
        <button
            className={'p-5 border-2 rounded-md border-black ' + props.className}
            onClick={() => {
                props.onClick()
            }}
        >
            {props.text}
        </button>
    )
}

export { Button }   