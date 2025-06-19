import AssetImg from '../AssetConfig/AssetImg'
import { IconsBar } from '../IconsBar/IconsBar'
import { PointsBar } from '../PointsBar/PointsBar'

import './TopBar.css'

export const TopBar = () => {
    return <div style={{ alignContent: 'center', width: '100%' }}>
        <div className="topBar">
            <PointsBar></PointsBar>
            <IconsBar></IconsBar>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='circle' style={{ alignContent: 'center' }}>
                <AssetImg size={85} name='gdg'></AssetImg>
            </div>
        </div>
    </div>
}