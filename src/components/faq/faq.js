import React, { Component } from "react";
class Faq extends Component {
  state = {
    faqlist: [
      {
        id: 1,
        question: "What if I have no experience with selling beats?",
        answer:
          "Great - we’ve got you covered. This masterclass shows you everything from scratch. We’ll start at the fundamentals, moving up to the advanced techniques. You’ll make an incredible jump-start compared to others that are just starting out."
      },
      {
        id: 2,
        question:
          "I’m already selling some beats, is this masterclass right for me?",
        answer:
          "Even better! This masterclass will help you accelerate your growth, which is even more effective when you already have a ground base of knowledge and experience with selling beats."
      },
      {
        id: 3,
        question: "How long do I get access for?",
        answer:
          "There is no time limit, and no monthly/yearly fee to keep access. Log in whenever you like and the masterclass will be there for you!"
      },
      {
        id: 4,
        question: "What is your refund policy?",
        answer:
          "We want you to make the right decision. That is why we offer a 14-day refund policy."
      },
      {
        id: 5,
        question: "I have a different question",
        answer:
          "You can use the Help Widget on the bottom right of the screen, or send an email to support@urbanmasterclass.com and we’ll get back to you ASAP.            "
      }
    ]
  };
  render() {
    return (
      <section>
        <div className="container-fluid bg-light">
          <div className="row  m-5" id="faq">
            <div className="col-lg text-center">
              <h3 className="text-muted">Frequently Asked Questions</h3>
            </div>
          </div>
          <div className="row text-white text-left">
            {this.state.faqlist.map(faq => (
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>{faq.question}</th>
                  </tr>
                </thead>
                <tbody className="bg-light">
                  <tr>
                    <td className="bg-light">{faq.answer}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Faq;
