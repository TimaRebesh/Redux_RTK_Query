import preloader from '../images/Fidget-spinner.gif'

export default function Preloader() {
    return <div className='preloader'>
        <div className='preloader-content'>
            <img src={preloader} />
        </div>
    </div>
}
