import { useEffect, useState, useRef } from "react";
import InputText from "./InputText";
import Preloader from "./Preloader";
import { useGetCommentsQuery, useAddNewCommentsMutation, useRemoveCommentsMutation, useEditCommentMutation } from '../redux/commentsApi'

export default function Comments() {

    const { data = [], isLoading, isSuccess, isError, error } = useGetCommentsQuery();
    const [addNew, addNewStatus] = useAddNewCommentsMutation();
    const [remove, removeStatus] = useRemoveCommentsMutation();
    const [edit, editStatus] = useEditCommentMutation();

    const [edited, setEdited] = useState(null);

    const addNewComment = async (value) => {
        await addNew(value).unwrap();
    }

    const removeComment = async (id) => {
        await remove(id).unwrap();
    }

    const editComment = async (value) => {
        setEdited(null);
        if (value)
            await edit({ value, id: edited }).unwrap();
    }

    return (
        <div>
            <InputText onSend={addNewComment} buttonText='Add your comments' />
            {(isLoading || addNewStatus.isLoading || removeStatus.isLoading || editStatus.isLoading) &&
                <Preloader />
            }
            {isError &&
                <h3>{error}</h3>
            }
            {data.length > 0 && data.map(com =>
                <div key={com.id} className='comments'>
                    {com.id === edited
                        ?
                        <Editor value={com.text} onEdit={editComment} />
                        :
                        <>
                            <span>{com.text}</span>
                            <span className='edit' onClick={() => setEdited(com.id)}>&#9998;</span>
                            <span className='remove' onClick={() => removeComment(com.id)}>&#10005;</span>
                        </>
                    }
                </div>
            )}
        </div>
    )
}

function Editor(props) {

    const [text, setText] = useState(props.value);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const keyDown = (e) => {
        if (e.code === 'Enter')
            props.onEdit(text)
        if (e.code === 'Escape')
            props.onEdit('')
    }

    return <input
        ref={inputRef}
        type='text'
        value={text}
        onChange={v => setText(v.target.value)}
        onKeyDown={keyDown}
    />
}
