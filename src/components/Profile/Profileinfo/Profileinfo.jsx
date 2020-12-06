import React from 'react';
import s from './Profileinfo.module.css'
import defautUserPhoto from '../../../assets/images/defUser.jpeg';
import Preloader from '../../common/Preloader/Preloader';

import ProfileStatusWithHooks from './ProfileInfoStatus/ProfileInfoStatusWIthHooks';
import ProfileInfoStatus from './ProfileInfoStatus/ProfileInfoStatus';



function Profileinfo(props) {


    if (!props.profileInfo) {
        return (<Preloader />)
    }
    return (
        <div className={s.wrap}>
            <div className={s.profile_wrap}>
                <div className={s.profile_photo}>
                    <img alt="profile_photo" src={props.profileInfo.photos.small ? props.profileInfo.photos.small : defautUserPhoto} />
                    <span>{props.profileInfo.aboutMe || null}</span>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
                <div className={s.profile_info}>
                    <span>My Contacts:
                        <ul>
                            {props.profileInfo.facebook ? <li>facebook:{props.profileInfo.facebook}</li> : null}
                            {props.profileInfo.website ? <li>facebook:{props.profileInfo.website}</li> : null}
                            {props.profileInfo.vk ? <li>facebook:{props.profileInfo.vk}</li> : null}
                            {props.profileInfo.twitter ? <li>facebook:{props.profileInfo.twitter}</li> : null}
                            {props.profileInfo.instagram ? <li>facebook:{props.profileInfo.instagram}</li> : null}
                            {props.profileInfo.github ? <li>facebook:{props.profileInfo.github}</li> : null}
                            {props.profileInfo.mainLink ? <li>facebook:{props.profileInfo.mainLink}</li> : null}
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    );
}


export default Profileinfo;