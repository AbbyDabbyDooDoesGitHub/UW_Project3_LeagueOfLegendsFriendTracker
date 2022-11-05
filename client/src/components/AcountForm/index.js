import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_ACCOUNT } from '../../utils/mutations';
import { QUERY_ACCOUNTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const AcountForm = () => {
  const [gameNote, setGameNote] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addAccount, { error }] = useMutation(ADD_ACCOUNT, {
    update(cache, { data: { addAccount } }) {
      try {
        const { accounts } = cache.readQuery({ query: QUERY_ACCOUNTS });

        cache.writeQuery({
          query: QUERY_ACCOUNTS,
          data: { accounts: [addAccount, ...accounts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, accounts: [...me.accounts, addAccount] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addAccount({
        variables: {
          gameNote,
          gamerName: Auth.getProfile().data.username,
        },
      });

      setGameNote('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'gameNote' && value.length <= 280) {
      setGameNote(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Leave a note about your experiences playing League of Legends</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="gameNote"
                placeholder="Here's is new note..."
                value={thoughtText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add note
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your note. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default AcountForm;
