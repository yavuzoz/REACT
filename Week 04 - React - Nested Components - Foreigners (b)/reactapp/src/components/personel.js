import Friends from './friends'
import Children from './children'

//this function is showing/writing the People in Data
function Personal(props){
    return (props.map((eleman)=> {
        return <div key={eleman.id} className="card my-2">
            <h2>PERSONEL  {eleman.id} </h2>
            <div className="card personel text-white">
            <span><img className="avatar" src={eleman.avatar} alt="resim"/></span>
            <h2 className="card-title">  {eleman.first_name}  {eleman.last_name}</h2>
            <table className="table">
                <thead>
            <tr>
                <th>ADRES</th>
                <th>SALARY</th>
                <th>GENDER</th>
                <th>EMAIL</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{eleman.address}</td>
                <td>{eleman.salary}</td>
                <td>{eleman.gender}</td>
                <td>{eleman.email}</td>
            </tr>
            </tbody>
            </table>
            {Friends(eleman)} {/* this function is showing/writing Friends of People in list */}
            {Children(eleman)}{/* this function is showing/writing Children of People in list */}
            </div>
        </div>
    }))
}

export default Personal