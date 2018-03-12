import { connect } from 'react-redux';
import NewNoteworthy from './new_noteworthy_index';
import { fetchProjects } from '../../../actions/project_actions';

const mapStateToProps = state => {
  return { project: "a project" };
};

const mapDispatchToProps = dispatch => {
  return { fetchProjects: () => dispatch(fetchProjects()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNoteworthy);
