import FishDetail from "./FishDetail"
import {useState} from "react"


export default function FishContainer({list}) {
    
const [fishList]=useState(list);

    return(
        <div>
        {fishList.map(fish=> 
        <FishDetail fishInfo={fish}/>)}
        </div>
    )
}