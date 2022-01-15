import { useState } from 'react';
import { useGetUsersQuery } from '../redux/usersApi';
import Preloader from "./Preloader";

export default function Users(props) {

    const { data: users = [], isLoading } = useGetUsersQuery();

    const [edit, setEdit] = useState(null);

    return (
        <div className='block'>
            {isLoading && <Preloader />}
            {users.length > 0 &&
                users.map(user => (
                    <div className='user' key={user.id}>
                        <Field label='name' value={user.name} />
                        <Field label='email' value={user.email} />
                        <Field label='phone' value={user.phone} />
                        <div className='edit_remove'>
                            <span className='edit' onClick={() => setEdit(user.id)}>&#9998;</span>
                            <span className='remove' onClick={() => { }}>&#10005;</span>
                        </div>
                    </div>
                ))}
        </div>
    )
}

function Field({ label, value, isEdit }) {
    return (
        <div className='field'>
            { }
            <span className='label'>{label}:  </span>
            <span>{value}</span>
        </div>
    )
}
