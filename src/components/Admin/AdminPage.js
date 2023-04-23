import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Users from "./Users";

import Profile from "./Profile";
import { getUser } from "../../actions/user";

export default function AdminPage({ bio }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [])

  const [check, setCheck] = useState("");
  return (
    <>
      {check === "" ? (
        <div className="admindiv">
          <center>
            <h1 style={{ color: "white" }}> Admin Page</h1>
          </center>
          <br />
          <br />
          <div className="adminsetup">
           

            

            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg"
                className="card-img-top"
                alt="..."
                height={200}
              />
              <div className="card-body">
                <h5 className="card-title">Users</h5>
                <p className="card-text">
                  View all the Users who want to avail our services.
                </p>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    setCheck("Users");
                  }}
                >
                  Users
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />
          <center>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setCheck("Profile");
              }}
            >
              Profile
            </button>
          </center>
        </div>
      ) : (
        <>
          {check === "Shops" ? (
            <>
            
            </>
          ) : (
            <>
              {check === "PEM" ? (
                <>
                
                </>
              ) : (
                <>
                  {check === "Profile" ? (
                    <>
                      <Profile bio={bio} />
                    </>
                  ) : (
                    <>
                      <Users />
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}