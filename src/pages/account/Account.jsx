import Avatar from "../../assets/img/myaccountavatar.png";
import AvatarStyle from "./account.module.scss";
import { FiLogOut } from "react-icons/fi";

function Account() {
  return (
    <div className={AvatarStyle.accountContainer}>
      <div className={AvatarStyle.avatarContainer}>
        <img src={Avatar} alt="my profile picture" />
      </div>
      <p className={AvatarStyle.accountName}>Pratur Anahata Pratama</p>
      <p className={AvatarStyle.accountEmail}>praturanhata45@gmail.com</p>

      <button className={AvatarStyle.accountButton}>
        <FiLogOut className={AvatarStyle.accountIcon} />
        Sign Out
      </button>
    </div>
  );
}

export default Account;
