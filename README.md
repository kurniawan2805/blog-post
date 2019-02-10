# Simple Blog Using React Redux Thnk

React Redux Thunk

Using apisauce helper

```javascript
// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce';

// define the api
const api = create({
  baseURL: 'https://api.github.com',
  headers: { Accept: 'application/vnd.github.v3+json' }
});

// start making calls
api
  .get('/repos/skellock/apisauce/commits')
  .then(response => response.data[0].commit.message)
  .then(console.log);

// customizing headers per-request
api.post('/users', { name: 'steve' }, { headers: { 'x-gigawatts': '1.21' } });
```

async/await will return nasty code,

promise need kind of middleware redux thunk async

### what is middleware?

action > dispatch > middleware > reducers

1. STOP, MODIFY, or mess arround with actions

2. Tons of open source middleware exist

3. Most popular is for dealing with async

```js
export const fetchPosts = () => {
  //Bad
  return async function(dispatch, getState) {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
      type: 'FETCH_POSTS',
      payload: response
    });
  };
};
```

### Reducers rules

- must return any value besides `undefined`
- Produces `state`, or data to be used inside our app using only prev state and the action (reducers are pure)
- Must not return reach 'out of itself' to decide what value to return
- MISLEADING >> Must not mutate its input `state` argument [Just kiding! Redux able to mutate state] actually about where is corner case!
- Just stick with rule of thumb
