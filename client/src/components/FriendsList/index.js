import React from 'react';
import { useMutation } from '@apollo/client';

import { REMOVE_FRIEND } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const FriendsList = ({ friends, isLoggedInUser = false }) => {
  const [removeFriend, { error }] = useMutation(REMOVE_FRIEND, {
    update(cache, { data: { removeFriend } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeFriend },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveFriend = async (friend) => {
    try {
      const { data } = await removeFriend({
        variables: { friend },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!friends.length) {
    return <h3>No Friends Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {friends &&
          friends.map((friend) => (
            <div key={friendl} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-primary text-light p-2 m-0 display-flex align-center">
                  <span>{friend}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveSkill(friend)}
                    >
                      😓X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default FriendsList;
