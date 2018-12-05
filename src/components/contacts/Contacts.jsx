import React, { Component, Fragment } from 'react'
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger border border-danger px-3 d-inline-flex justify-content-center align-items-center text-uppercase">Contact </span>
                <span className="bg-danger text-white border border-danger px-3 d-inline-flex justify-content-center align-items-center text-uppercase">List</span>
              </h1>
              {contacts.map(contact => 
                <Contact
                  key={contact.id}
                  contact={contact}
                />
              )}
            </Fragment>
        )}}
      </Consumer>
    )
  }
}

export default Contacts;