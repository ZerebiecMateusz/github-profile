export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';

export function fetchProfile() {
    return (dispatch) => {
      let header = new Headers({"Content-Type":"application/json", "Authorization":"token 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"});
      return fetch('https://api.github.com/users/zerebiecmateusz', {
        method: 'GET',
        headers: header
      })
      .then(response => response.json())
      .then(json => {
        dispatch(loadProfile(json))
      })
      .catch(error => console.log(error));
    }
  }

  export function saveProfile(profile) {
    return (dispatch) => {
      let header = new Headers({"Content-Type":"application/json", "Authorization":"token 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"});
      return fetch('https://api.github.com/users/', {
        method: 'PATCH',
        headers: header,
        body : JSON.stringify(profile)
      })
      .then(response => response.json())
      .then(json => {
        dispatch(loadProfile(json))
      })
      .catch(error => console.log(error));
    }
  }
  
  export function loadProfile(results) {
    return {
      type : PROFILE_FETCHED,
      payload : results
    }
  }
  