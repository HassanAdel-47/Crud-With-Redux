import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, deletePost, updatePost } from "../Redux/postsSlice";
import { useSelector } from "react-redux";
import "animate.css";
function Posts() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);

  const [editedTitle, setEditedTitle] = useState("");
  const [editedDesc, setEditedDesc] = useState("");

  const posts = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();

  const [isEmpty, setIsEmpty] = useState("");
  const [alarm, setAlarm] = useState(false);
  const emptyAddCheck = () => {
    if (title && desc) {
      setAlarm(false);
      dispatch(addPost({ id: posts.length + 1, title, desc }));
    } else setAlarm(true);
  };

  return (
    <div>
      <div className="form ">
        {/* Start Input Text */}
        <input
          className={
            alarm
              ? "redPlaceholder animate__animated animate__fadeInDown"
              : "animate__animated "
          }
          type="text"
          value={title}
          placeholder="Enter Post Title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          className={
            alarm
              ? "redPlaceholder animate__animated animate__fadeInUp"
              : "animate__animated animate__fadeInUp "
          }
          type="text"
          value={desc}
          placeholder="Enter Post Desc"
          onChange={(e) => setDesc(e.target.value)}
        ></input>
        {/* End Input Text */}

        {/* Start Add Post Button */}
        <button
          className="animate__animated animate__fadeInDown"
          onClick={() => {
            setIsEdit(false);
            emptyAddCheck();
            setTitle("");
            setDesc("");
          }}
        >
          Add Post
        </button>
        {/* End Add Post Button */}
      </div>
      <div className="posts">
        {posts &&
          posts.map((post) => (
            <div
              className="post animate__animated animate__fadeIn  "
              key={post.id}
            >
              <h2>{post.title}</h2>
              <p>{post.desc}</p>
              <button
                onClick={() => {
                  setIsEdit(true);
                  setId(post.id);
                }}
              >
                Edit
              </button>

              {/*Start Delete Button */}
              <button
                onClick={function () {
                  dispatch(deletePost({ id: post.id }));
                }}
              >
                Delete
              </button>
              {/*End Delete Button */}

              <br />
              {isEdit && id === post.id && (
                <>
                  {/* Start Edited Text Input */}
                  <input
                    className="myInput animate__animated animate__fadeIn "
                    type="text"
                    placeholder="Updated Title"
                    onFocus={() => setIsEmpty("No")}
                    onChange={function (e) {
                      setEditedTitle(e.target.value);
                    }}
                  ></input>
                  <input
                    className=" animate__animated animate__fadeIn"
                    type="text"
                    placeholder="Updated Desc"
                    onChange={(e) => setEditedDesc(e.target.value)}
                  ></input>
                  {/* End Edited Text Input */}

                  {/* Start Update Button */}
                  <button
                    className=" animate__animated animate__fadeIn"
                    onClick={function () {
                      isEmpty !== ""
                        ? dispatch(
                            updatePost({
                              id: post.id,
                              title: editedTitle,
                              desc: editedDesc,
                            })
                          )
                        : setIsEdit(false);
                      setIsEmpty("");
                    }}
                  >
                    Update
                  </button>
                  {/* End Update Button */}
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Posts;
