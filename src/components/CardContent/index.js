import './styles.css'
import delet from '../../assets/delete.svg'
import edit from '../../assets/edit.svg'

export const CardContent = () => {
    return (
        <div className="card-content flex flex-col">
            <div className='header-content-card flex align-items'>
                <h1>
                    Title
                </h1>
                <div className='icons flex align-items'>
                    <img src={delet} alt='delete icone' />
                    <img src={edit} alt='edit icone' />
                </div>
            </div>
            <div className='body-content-card flex flex-col'>
                <div className='header-body-card flex align-items '>
                    <h2>@user</h2>
                    <h3>
                        timer
                    </h3>
                </div>
                <div className='content-body-card'>
                    <p>
                        Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

                        Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
                    </p>
                </div>
            </div>
        </div>
    )
}