import React, { Fragment } from 'react';
import Context from './context';
import Provider from "./provider";

const Agent = () => {
  return <AgentOne/>
}

const AgentOne = () => (
  <AgentTwo/>
)

const AgentTwo = () => (
  <AgentFinal/>
)

const AgentFinal = () => (
  <Context.Consumer>
    {
      context => (
        <Fragment>
          <h3>Agent Information</h3>
          <p>Mission Name: {context.data.mname}</p>
          <h2>Mission Status: {context.data.accept}</h2>
          <button onClick={context.isMissionAccepted}>Choose to accept</button>
        </Fragment>
      )
    }
  </Context.Consumer>
)

const App = () => (
  <div>
    <Provider>
      <Agent/>
    </Provider>
  </div>
)

export default App;
