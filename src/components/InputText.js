import { useState } from "react"

export default function InputText(props) {

    const [text, setText] = useState('');

    const sendMessage = () => {
        if (text) {
            props.onSend(text);
            setText('');
        }
    }

    return (
        <div className='input_text'>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={sendMessage} >{props.buttonText}</button>
        </div>
    )
}
