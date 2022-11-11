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
            <h4 className="card-header bg-success text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-dark"
                  to={`/profiles/${account.gamerName}`}
                >
                  {account.gamerName} <br />
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
            <div className="card-body bg secondary p-2">
              <p>{account.gamerName}<br />{account.gameNote}</p>
              {/* <p>{account.gameNote}</p> */}
            </div>
            <Link
              className="btn btn-light btn-block btn-squared"
              to={`/accounts/${account._id}`}
            >
              view your contactlist and add more  Friend
            </Link>
          </div>
        ))}
    </div>
  );
};

export default AccountList;
