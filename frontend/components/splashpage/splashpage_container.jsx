import { connect } from 'react-redux';
import Splashpage from './splashpage';
import { fetchProjects } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/category_actions';
import { selectAllProjects } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    projects: state.entities.projects,
    categories: state.entities.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splashpage);
