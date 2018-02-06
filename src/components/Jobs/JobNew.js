import React from "react";
import { connect } from "react-redux";
import { addJob } from "../../actions/job-actions";

class JobNew extends React.Component {
    constructor(props) {
      super(props);
      if (props.job) {
        this.state = {
          id: props.job.id,
          title: props.job.title,
          position: props.job.position,
          description: props.job.description,
          field: props.job.field,
          skills: props.job.skills,
          education_level: props.job.education_level,
          employment_type: props.job.employment_type,
          status: props.job.status
        };
      } else {
        this.state = {
          id: null,
          title: null,
          position: null,
          description: null,
          field: null,
          skills: null,
          education_level: null,
          employment_type: null,
          status: null
        };
      }
  }

  handleChange = e => {
    if (this.props.currentUser) {
      this.setState({
        [e.target.name]: e.target.value,
        user_id: this.props.currentUser.id
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addJob(this.state);
  };

  render() {
    console.log(this.state);
    console.log(this.props)
    return (

      <div>
        <form class="ui form" onSubmit={this.handleSubmit} id="new-job-form">
          <label> Title </label>
          <input
            type="text"
            placeholder="title"
            name = "title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label> Position </label>
          <input
            type="text"
            name="position"
            placeholder="position"
            value={this.state.position}
            onChange={this.handleChange}
          />

            <label>Status</label>
            <input
              id="job-edit-input"
              type="text"
              name="status"
              placeholder="Status"
              value={this.state.status}
              onChange={this.handleChange}
            />


              <label> Field </label>
              <input
                id="job-edit-input"
                type="text"
                name="field"
                placeholder="field / industry"
                value={this.state.field}
                onChange={this.handleChange}
              />
              <label>Skills</label>
              <input
                id="job-edit-input"
                type="text"
                name="skills"
                placeholder="skills"
                value={this.state.skills}
                onChange={this.handleChange}
              />
              <label>Employment Type</label>
              <input
                id="job-edit-input"
                type="text"
                name="employment_type"
                placeholder="employment type"
                value={this.state.employment_type}
                onChange={this.handleChange}
              />
              <label> Highest Level of Education Completed </label>
              <select
                value={this.state.education_level}
                name="education_level"
                multiple=""
                class="ui dropdown"
                onChange={this.handleChange}>
                  <option value="">Select Education Level</option>
                  <option value="No Formal Education">No Formal Education</option>
                  <option value="Primary Education">Primary Education</option>
                  <option value="Secondary Education or High School">Secondary Education or High School</option>
                  <option value="GED">GED</option>
                  <option value="Vocational Qualification">Vocational Qualification</option>
                  <option value="Bachelor's degree">Bachelor's degree</option>
                  <option value="Master's degree">Master's degree</option>
                  <option value="Doctorate or higher">Doctorate or higher</option>
              </select>


              <label> Description </label>

              <textarea
                id="job-edit-input"
                name="description"
                type="textarea"
                rows="6"
                placeholder="description"
                value={this.state.description}
                onChange={this.handleChange}>
              </textarea>

              <button class="positive ui button" onClick={this.handleSubmit}>
                Submit Changes{" "}
              </button>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { addJob })(JobNew);
