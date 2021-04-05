import './FishDetail.css'

export default function FishDetail({fishInfo}) {
    return(
        <div className="fish-info">
            <span id="name">{fishInfo.fishType}</span>
            <span>{fishInfo.price}</span>
            <span>{fishInfo.durationInDays}</span>
            <span>{fishInfo.itemWeightInGrams}</span>
            <span>{fishInfo.originCountry}</span>
            <span>{fishInfo.season}</span>
            <span>{fishInfo.stockVolumeInKg}</span>
            <div>{fishInfo.saleLocations.map(location=>{
                return(
                    <div>{location}</div>
                )
            })}</div>
        </div>
    )
}