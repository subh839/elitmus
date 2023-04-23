import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.user);
  const [check, setCheck] = useState(true);

  return (
    <div>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Users</b>
                  </h2>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>User Name</th>

                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {console.warn({ users })}
                {users?.map((user) => (
                  <>
                    <tr>
                      <td>{user?.email}</td>

                      <td>{user?.score}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
