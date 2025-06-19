import AssetImg from '../AssetConfig/AssetImg'
import './PointsBar.css'

export const PointsBar = () => {
    return <div className="pointsBar"> 
        <AssetImg isWhite= { false } name = "coin" size = {40}/>
        <a style={{ fontSize: '25px', color: 'white' }}> 0 </a>
    </div>
}