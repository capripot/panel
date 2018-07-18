import React from 'react';

export default class Pre extends React.Component {
  render() {
    var { label, helperText, value } = this.props;
    return (
      <div>
        <label>{label}</label>
        <div>
          <pre>
            {value}
          </pre>
        </div>
        <p>{helperText}</p>
      </div>
    )
  }
}
