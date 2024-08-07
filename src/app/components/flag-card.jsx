import Image from "next/image"

export default function FlagCard({obj}){
    if (!obj) {
        return null;
    }
    return(
        <div className="flag-card">
            <Image src={obj.flag} width={700} height={500} alt={obj.name}/>
            <h1 className="country-name">{obj.name}</h1>
        </div>
    )
}