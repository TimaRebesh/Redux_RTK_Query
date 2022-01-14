import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../hooks/redux";
// import { deleteMessage, fetchMessages } from "../store/reducers/messagesSlice";
import InputText from "./InputText";
// import { createNewMessage } from "../store/reducers/messagesSlice";
import Preloader from "./Preloader";
import { useGetCommentsQuery, useAddNewCommentsMutation, useRemoveCommentsMutation } from '../redux/commentsApi'

export default function Comments() {

    // const  { messages, status, error } = useAppSelector(state => state.messages);
    // const dispatch = useAppDispatch();

    const { data = [], isLoading, isSuccess, isError, error } = useGetCommentsQuery();
    const [addNewComment, addNewCommentStatus] = useAddNewCommentsMutation();
    const [removeComment, removeCommentsStatus] = useRemoveCommentsMutation();
    
    const addNew = async (value) => {
        await addNewComment({ body: value }).unwrap();
    }
    
    const remove = async (id) => {
        await removeComment(id).unwrap();
    }

    return (
        <div>
            <InputText onSend={addNew} buttonText='Add your comments' />
            {(isLoading || addNewCommentStatus.isLoading || removeCommentsStatus.isLoading) &&
                <Preloader />
            }
            {isError &&
                <h3>{error}</h3>
            }
            {data.length > 0 && data.map(m =>
                <div key={m.id} className='comments'>
                    <span>{m.body}</span>
                    <span className='remove' onClick={() => remove(m.id)}>&#10005;</span>
                </div>
            )}
        </div>
    )
}
