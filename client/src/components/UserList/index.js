import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users, title }) => {
  if (!users.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {users &&
          users.map((user) => (
            <div key={user._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {user.username} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {profile.skills ? user.friends.length : 0}{' '}
                    Added Friends
                    {user.friends && user.friends.length === 1 ? '' : 's'}
                  </span>
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/profiles/${user._id}`}
                >
                  View your added friends.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
