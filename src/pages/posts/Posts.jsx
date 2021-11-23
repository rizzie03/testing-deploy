import Details from "../../components/Contents/Details";
import Comment from "../../components/comments/Comments";
import PostsStyle from "./posts.module.scss";
import { FiMessageCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsAction, postCommentsAction } from "../../redux/action/actions/actionComments";

function Posts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsAction(id), (postCommentsAction(id)));
  }, []);
  const id = useParams();
  const [inputs, setInputs] = useState({
    title: "",
  });
  console.log("inputs", inputs);
  const changeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [listComment, setListComment] = useState([]);
  const [comment, setComment] = useState([]);
  console.log("list", listComment);
  console.log("comment", comment);
  const submitComment = () => {
    setListComment([...listComment, comment]);
  };
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
                alt='Yosua Ginting'
              />
            </div>
            <div className={PostsStyle.postCommenterProfileUserInfo}>
              <p>John Doe</p>
            </div>
          </div>
          <form>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              placeholder='Enter your comment here'
              name=''
              id=''
              rows='3'></textarea>
            <button
              onClick={submitComment}
              type='submit'
              className={PostsStyle.postCommenterSubmit}>
              <FiMessageCircle className={PostsStyle.commentIcon} />
              Submit
            </button>
            <div>
              {listComment.length
                ? listComment.map((item, index) => {
                    return (
                      <div key={index}>
                        <p>{item}</p>
                      </div>
                    );
                  })
                : null}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Posts;
