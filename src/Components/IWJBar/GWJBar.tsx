import './GWJ.css'
import GLetter from './../../assets/Gletter.svg'
import WLetter from './../../assets/Wletter.svg'
import JLetter from './../../assets/Jletter.svg'

export const GWJBar = () => {
    return <div className="gwjBar"> 
        <img src={WLetter}/>
        <img src={GLetter}/>
        <img src={JLetter}/>
    </div>
}