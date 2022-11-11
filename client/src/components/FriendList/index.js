import React from 'react';
// import { QUERY_ME} from "../../utils/queries"
import { useQuery } from '@apollo/client';
// import { QUERY_SINGLE_ACCOUNT } from '../utils../queries';

const FriendList = ({ friends = [] }) => {
  if (!friends.length) {
    return <h3>No Friends added Yet</h3>;
  }
  // const { loading, data } = useQuery(QUERY_ME, {
    // pass URL parameter
    // variables: { accountId: accountId },
  // });

  // const friend = data?.friend || {};
// test
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // const { loading, data } = useQuery(QUERY_ME, {
    // pass URL parameter
    // variables: { accountId: accountId },
  // });

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px  #1a1a1a' }}
      >
        FRIENDS
      </h3>
      <div className="flex-row my-4">
        {friends &&
          friends.map((friend) => (
            <div key={friend._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                   added{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {friend.createdAt}
                  </span>
                </h5>
                <p className="card-body">{friend.friendName}<br />
                {friend.friendNote}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default FriendList;
