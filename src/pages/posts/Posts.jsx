import Details from "../../components/Contents/Details";
import Comment from "../../components/comments/Comments";
import PostsStyle from "./posts.module.scss";
import { FiMessageCircle } from "react-icons/fi";

function Posts() {
  return (
    <>
      <div className={PostsStyle.post}>
        <Details />
        <h2>Comments</h2>
        <Comment />
        <div className={PostsStyle.postCommenter}>
          <div className={PostsStyle.postCommenterProfileUser}>
            <div className={PostsStyle.postCommenterProfileUserPP}>
              <img
                src={`https://s3-alpha-sig.figma.com/img/84fd/f4b2/bcfdf270fa5a1ac8f5f7bbf9b30301f6?Expires=1638144000&Signature=Y-dfpnCXMbtr6mK1FDSc~meIjdaCUvxYuoZezfsuBuBILjJG3gHL3XxPjdSl3SwPn-R7iHWa9cAHO6YIkvh~E88nK37KJkgX5j1vzshGx6PVjxKc2hYHg2lqBpop8Ouv2RIgUT-0-W0P4YM6T6437619J3nghaRNb-rPb2inrKcTjGqIST0ZgWxJfWQWwR1~FTEEBglUvY8CfCtKl56P6HdKDt~waW2oGKN8BcuQ5BvRT~20N5P2T-jmlMuXxvv-YNYpXIBE04EzbV0t~lNnS2751lX7oQoaiZcxHjK7kwctTP9eBk85RzCh1gghJ-0qDCKrb4VtUUUqVJSc9ER5nw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`}
                alt="Yosua Ginting"
              />
            </div>
            <div className={PostsStyle.postCommenterProfileUserInfo}>
              <p>John Doe</p>
            </div>
          </div>
          <form>
            <textarea
              placeholder="Enter your comment here"
              name=""
              id=""
              rows="3"
            ></textarea>
            <button type="submit" className={PostsStyle.postCommenterSubmit}>
              <FiMessageCircle className={PostsStyle.commentIcon} />
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Posts;
