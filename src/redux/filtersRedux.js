/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const CHANGE_TAG = createActionName('CHANGE_TAG');
export const CHANGE_REGION = createActionName('CHANGE_REGION');

// action creators
export const changeSearchPhrase = (payload) => ({
  payload,
  type: CHANGE_PHRASE,
});
export const changeDuration = (payload) => ({
  payload,
  type: CHANGE_DURATION,
});
export const changeTags = (payload) => ({
  payload,
  type: CHANGE_TAG,
});
export const changeRegion = (payload) => ({
  payload,
  type: CHANGE_REGION,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          [action.payload.type]: action.payload.value,
        },
      };

    case CHANGE_TAG:
      return {
        ...statePart,
        tags: action.payload.checked
          ? [...statePart.tags, action.payload.tag]
          : statePart.tags.filter(tag => tag != action.payload.tag),
      };
    case CHANGE_REGION:
      return {
        ...statePart,
        regions: action.payload.checked
          ? [...statePart.regions, action.payload]
          : statePart.regions.filter(region => region != action.payload),

      };

    default:
      return statePart;
  }
}
