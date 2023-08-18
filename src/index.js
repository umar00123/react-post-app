
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Post(props) {
  return (
    <div className="facebookPost">
      <div className="postHeader">
        <img className="avatar" src={props.avatarUrl} alt="Avatar" />
        <div className="userInfo">
          <h3>{props.name}</h3>
          <span className="postDate">3 July 2023</span>
        </div>
      </div>
      <p>{props.text}</p>
      <img
        className="postImage"
        src={props.imgUrl}
        alt="Post"
        width="600" // Aap apne requirement ke hisab se width set kar sakte hain
        height="400" // Aap apne requirement ke hisab se height set kar sakte hain
      />

      <div className="postButtons">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
}



const postsData = [
  {
    avatarUrl:"https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
    imgUrl:"https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=600",
    text:"first Postttttttt",
    name:"Umar"
  },
  {
    avatarUrl: "https://images.pexels.com/photos/1987343/pexels-photo-1987343.jpeg?auto=compress&cs=tinysrgb&w=600",
    imgUrl: "https://images.pexels.com/photos/17789335/pexels-photo-17789335/free-photo-of-a-laptop-on-the-table-with-the-view-of-the-sea.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Second Posssstt.",
    name: "Huzaifa",
  },
  {
    avatarUrl: "https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600",
    imgUrl: "https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Another interesting React post.",
    name: "Raghib",
  }, {
    avatarUrl: "https://images.pexels.com/photos/207740/pexels-photo-207740.jpeg?auto=compress&cs=tinysrgb&w=600",
    imgUrl: "https://images.pexels.com/photos/1987343/pexels-photo-1987343.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Another interesting React post.",
    name: "Asad",
  },
  // Add more posts here
];

ReactDOM.render(
  <div>
    {postsData.map((post, index) => (
      <Post
        key={index}
        avatarUrl={post.avatarUrl}
        imgUrl={post.imgUrl}
        text={post.text}
        name={post.name}
      />
    ))}
  </div>,
  document.querySelector("#root")
);