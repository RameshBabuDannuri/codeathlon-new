import React, { Component } from "react";

class Course extends Component {
  render() {
    const { id, name, discription, topics } = this.props.course;
    return (
      <React.Fragment>
        <div className=" card border-0 card-body  h-100  m-2 zoom" key={id}>
          <h5 className="text-warning">
            Module-{id} {name}
          </h5>
          <p className="text-muted">
            <span>{discription}</span>
          </p>

          <ul className="list-unstyled">
            {topics.map(topic => (
              <li className="ml-1 list-unstyled" style={{ color: "#001530" }}>
                <i class="far fa-arrow-alt-circle-right text-warning m-2 fa-1x" />
                {topic.topic}
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default Course;
