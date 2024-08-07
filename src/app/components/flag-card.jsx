
export default function FlagCard({obj}){
    if (!obj) {
        return null;
    }
    return(
        <div className="flag-card">
            <img src={obj.flag} className="flag-image" alt={obj.name}/>
            <h1 className="country-name">{obj.name}</h1>
        </div>
    )
}