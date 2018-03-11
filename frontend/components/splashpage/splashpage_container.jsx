import { connect } from 'react-redux';
import Splashpage from './splashpage';
import { fetchProjects } from '../../actions/project_actions';
import { selectAllProjects } from '../../reducers/selectors';

const mapStateToProps = state => {
  console.log(state);
  return { projects: selectAllProjects(state.entities) };
};

const mapDispatchToProps = dispatch => {
  return { fetchProjects: () => dispatch(fetchProjects()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splashpage);
