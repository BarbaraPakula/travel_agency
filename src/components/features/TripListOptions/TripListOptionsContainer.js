import { connect } from 'react-redux';
import TripListOptions from './TripListOptions';
import { getAllTags } from '../../../redux/tagsRedux';
import { getAllFilters, changeSearchPhrase, changeDuration, changeTags, changeRegion } from '../../../redux/filtersRedux';
import {getAllRegions} from '../../../redux/regionsRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
  regions: getAllRegions(state),

});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // add more dispatchers for other filters
  changeDuration: payload => dispatch(changeDuration(payload)),

  changeTag: payload => dispatch(changeTags(payload)),
  changeRegion: payload => dispatch(changeRegion(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
