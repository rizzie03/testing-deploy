// import Details from "../../components/Contents/Details";
import CommentStyle from "./comments.module.scss";

function Comment() {
  return (
    <>
      <div className={CommentStyle.comment}>
        <div className={CommentStyle.commentProfileUser}>
          <div className={CommentStyle.commentProfileUserPP}>
            <img
              src={`https://s3-alpha-sig.figma.com/img/6989/fa55/0b70f9e3dda2c46d3dbb67885145014e?Expires=1637539200&Signature=Mm9VNezDRtsO37Zg-lLvWn4K3td1WnkryOWxBei29AhDj2x3MgAchhAeGV6ik~-Qp7mWSISij-jcLWmphWBnlmosCFPtHpuZmViBQCp21Y-7pDSlbCPqZBYdz4s2hH8rxapxL2yjbpVbsCcqAfNyH6FzP3lWvG-E9bE2Gdvk-qgLE-DaR-3V3u3cUI2ZAYW4TqwFMW0gwOSyDEKoOgfBI7HA727lqZMSEcUt6HUiAjvkgB2GQd6W83D5YSD9TVRa0atZOv~JEJwGvIk6hWYWqAYrx6WIa1ZmPNEFlysi6Xe4VIX-QldNHVIEGidnall2Z-W3GE50kvrqFDQaps9mOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`}
              alt="Yosua Ginting"
            />
          </div>
          <div className={CommentStyle.commentProfileUserInfo}>
            <p>Yoshua Ginting</p>
            <p>4 Days ago</p>
          </div>
        </div>
        <p>Hi, do you have a youtube channel that I can subscribe?</p>
      </div>
    </>
  );
}
export default Comment;
