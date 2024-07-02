import React from "react";

function ArrayOfObjectsList() {
  const userInfo = [
    {
      userName: "Vamsi",
      email: "test@gmail.com",
      location: "Portugal",
    },
    {
      userName: "John",
      email: "jd@gmail.com",
      location: "UK",
    },
    {
      userName: "Alex",
      email: "at@gmail.com",
      location: "USA",
    },
  ];
  return (
    <>
      {userInfo.map((user) => {
        return (
          <div>
            <ul key={Math.random()}>
              <li>
                <h3>{user.userName}</h3>
                <p>{user.email}</p>
                <p>{user.location}</p>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default ArrayOfObjectsList;
