import css from './FriendList.module.css'

const FriendListItem = ({ friends }) => 
    friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
            <span className={`${css.status} ${isOnline?css.online:css.offline}`}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    ));


export default FriendListItem