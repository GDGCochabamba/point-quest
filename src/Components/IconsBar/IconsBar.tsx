import AssetImg from '../AssetConfig/AssetImg'
import './IconsBar.css'

export const IconsBar = () => {
    return <div className="iconsBar"> 
        <AssetImg isWhite= { true } name = "tensorflow" size = {40}/>
        <AssetImg isWhite= { true } name = "angular" size = {40}/>
        <AssetImg isWhite= { true } name = "firebase" size = {40}/>
    </div>
}