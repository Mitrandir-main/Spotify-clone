import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //https://accounts.spotify.com/authorize?client_id=433223f2afd14673a76c52e337d6a6f6&redirect_uri=https://spotify-e4f97.web.app/&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true
  //https://accounts.spotify.com/authorize?scope=user-read-currently-playing+user-read-recently-played+user-read-playback-state+user-top-read+user-modify-playback-state&response_type=token&redirect_uri=https%3A%2F%2Fspotify-e4f97.web.app%2F&client_id=433223f2afd14673a76c52e337d6a6f6&show_dialog=true#_=_
  //https://accounts.spotify.com/en/login?continue=https:%2F%2Faccounts.spotify.com%2Fauthorize%3Fscope%3Duser-read-currently-playing%2Buser-read-recently-played%2Buser-read-playback-state%2Buser-top-read%2Buser-modify-playback-state%26response_type%3Dtoken%26redirect_uri%3Dhttps%253A%252F%252Fspotify-e4f97.web.app%252F%26client_id%3D433223f2afd14673a76c52e337d6a6f6%26show_dialog%3Dtrue
  //    token: "BQDlFatZt-kzyC0rnI3WD6iYOxZH4di-nOS0AIO3r6-46YKuuu5-aYC_Nk5OgI6DBzLcnb-iP_wLuwUzyxEpL17NKsWoIMgFf4zVK_y5f9roD4qXeNQYigWIvPZMWUskMmFNkGOajqxrMK0yFwV5NbEPawiv1yR9Of7BogD8mHf-2Egx9rs8",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
