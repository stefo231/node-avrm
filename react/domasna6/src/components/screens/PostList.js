import React from "react";

export default function PostList(props) {
  return (
    <div>
      <ol>
        {props.posts.map((val, key) => {
          return (
            <li key={key}>
              <span>
                <h2>{val.title}</h2>
              </span>
              <span>
                <p>{val.body}</p>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
