import React, { Component } from "react";

const styles = {
  root: {
    padding: "20px"
  },
  card: {
    borderRadius: 12,

    border: "none",
    minHeight: "350px",
    height: "100px"
  },
  h5: {
    color: "#017BFF"
  },
  li: {
    color: "black",
    marginLeft: "10px"
  },
  i: {
    marginRight: "5px",
    color: "#017BFF"
  }
};
class Course extends Component {
  render() {
    const { id, name, discription, topics } = this.props.course;
    return (
      <React.Fragment>
        <div style={styles.root}>
          <div className=" card  card-body zoom" key={id} style={styles.card}>
            <h5 style={styles.h5}>
              Module-{id} {name}
            </h5>
            <p className="text-muted">
              <span>{discription}</span>
            </p>

            <ul className="list-unstyled">
              {topics.map(topic => (
                <li className="list-unstyled" style={styles.li} key={topic.id}>
                  <i
                    className="far fa-arrow-alt-circle-right fa-1x"
                    style={styles.i}
                  />
                  {topic.topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Course;
