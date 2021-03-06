import { parseOptionPrice } from '../utils/parseOptionPrice';


/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // - filter by duration
  if (filters.duration) {
    output = output.filter((trip) => trip.days >= parseInt(filters.duration.from) && trip.days <= parseInt(filters.duration.to));
  }

  //  - filter by tags

  if (filters.tags) {
    for (let tag of filters.tags) {
      console.log(tag);
      output = output.filter((trip) => trip.tags.includes(tag));
      console.log(output);
    }
  }
  // TODO filter by regions
  if (filters.regions) {
    for (let region of filters.regions) {
      console.log(region);
      // output = output.filter((trip) => region.countries.includes(trip.countries.code));
    }
  }

  // TODO - sort by cost descending (most expensive goes first)
  output = output.sort((a, b) => parseOptionPrice(b.cost).value - parseOptionPrice(a.cost).value);


  return output;
};

export const getTripById = ({ trips }, tripId) => {
  const filtered = trips.filter(
    (trip) => trip.id == tripId
  );

  // - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  const filtered = trips.filter(
    (trip) => trip.country.code == countryCode
  );

  // - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
