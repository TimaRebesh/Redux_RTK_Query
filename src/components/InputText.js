// import { AsyncThunkAction } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { useState } from "react"
// import { useAppDispatch } from "../hooks/redux";



export default function InputText(props) {

	// const dispatch = useAppDispatch();
    const [text, setText] = useState('');

    const sendMessage = () => {
        // if (text) {
        //     dispatch(props.action(text))
        //     setText('');
        // }
    }

    return (
        <div className='input_text'>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='enter your text'
            />
            <button onClick={sendMessage} >Add your comments</button>
        </div>
    )
}
