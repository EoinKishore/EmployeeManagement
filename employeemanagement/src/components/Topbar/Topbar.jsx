import './Topbar.css';
import SettingIcon from '../../assets/images/settings.svg';
import BellIcon from '../../assets/images/bell.svg';
import UserIcon from '../../assets/images/user.svg';
const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbarLogo'>
            <h2 className='topbarTitle'>RS-TECH</h2>
        </div>
            <div className='topbarLinks'>
                <div className="iconContainer">
            <img src={SettingIcon} alt="Setting Icon" className='topbarIcon' />
            </div>
            <div className="iconContainer">
            <img src={BellIcon} alt="Bell Icon" className='topbarIcon' />
            </div>
            <div className="iconContainer">
            <img src={UserIcon} alt="User Icon" className='topbarIcon' />
            </div>
        </div>
    </div>
  )
}

export default Topbar