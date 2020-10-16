import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
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