import { useSelector, useDispatch } from "react-redux";
import { changeTab } from '../redux/tabBarSlice';

export default function TabBar() {

    const  { tabNumber  } = useSelector(state => state.tabbar);
    const dispatch = useDispatch();
    
    const tabs = [
        { id: 1, text: 'Users' },
        { id: 2, text: 'Comments' },
    ]

    return (
        <div className='tab-bar'>
            {tabs.map(t => (
                <div
                    key={t.id}
                    className={`tab ${t.id === tabNumber ? 'selected' : ''}`}
                    onClick={() => dispatch(changeTab(t.id))}
                >
                    <div className='tab-content'>{t.text}</div>
                </div>
            ))}
        </div>
    )
}
