import React, { Fragment } from 'react';

//Components
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <Fragment>
      <Header title="Weather React" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
