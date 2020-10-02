import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import "./styles.scss"

class ExamplePopup extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="container has-text-centered">

        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://form.typeform.com/to/bkXtFW"
          hideHeaders
          hideFooter
          buttonText="Go!"
          style={{ top: 10 }}
          ref={tf => {
            this.typeformEmbed = tf;
          }}
        />
        <button className="button is-rounded is-medium is-dark" onClick={this.openForm} style={{ cursor: 'pointer' }}>
          Comenzar typeform
        </button>


      </div>
    );
  }
}

export default ExamplePopup;