
export default function FlagCard({obj}){
    if (!obj) {
        return null;
    }
    return(
        <div className="flag-card">
            <img src={obj.flag} className="flag-image" alt={obj.name}/>
        </div>
    )
}