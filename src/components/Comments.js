import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../hooks/redux";
// import { deleteMessage, fetchMessages } from "../store/reducers/messagesSlice";
import InputText from "./InputText";
// import { createNewMessage } from "../store/reducers/messagesSlice";
import Preloader from "./Preloader";
import { useGetCommentsQuery } from '../redux/commentsApi'

export default function Comments() {

    // const  { messages, status, error } = useAppSelector(state => state.messages);
    // const dispatch = useAppDispatch();

    const { data = [], isLoading, isSuccess, isError } = useGetCommentsQuery();

    console.log(isLoading, isSuccess, isError, data)

    useEffect(() => {
    //    dispatch(fetchMessages());
    }, [])

    const remove = (id) => {
        // dispatch(deleteMessage(id))
    }

    return (
        <div>
            <InputText  />
            {/* {status === 'loading' &&
                <Preloader />
            }
            {error &&
                <h3>{error}</h3>
            } */}
            {data.length > 0 && data.map(m =>
                <div key={m.id} className='comments'>
                    <span>{m.body}</span>
                    <span className='remove' onClick={() => remove(m.id)}>&#10005;</span>
                </div>
            )}
        </div>
    )
}
