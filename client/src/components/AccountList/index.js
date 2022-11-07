import React from 'react';
import { Link } from 'react-router-dom';

const AccountList = ({
  accounts,
  title,
  
  showTitle = true,
//   showNote = true,
  showUsername = true,
}) => {
  if (!accounts.length) {
    return <h3>No Accounts Yet</h3>;
  }

  return (
    <div>
      {showTitle &&  <h3>{title}</h3>}
      {accounts &&
        accounts.map((account) => (
          <div key={account._id} className="card mb-3">
            <h4 className="card-header bg-secondary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${account.author}`}
                >
                  {account.author} <br />
                  <span style={{ fontSize: '1rem' }}>
                    created this game account on {account.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You created this game account on {account.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{account.gamerName}<br />{account.gameNote}</p>
              {/* <p>{account.gameNote}</p> */}
            </div>
            <Link
              className="btn btn-light btn-block btn-squared"
              to={`/friends/${account._id}`}
            >
              Add a Friend's name to your game account.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default AccountList;
