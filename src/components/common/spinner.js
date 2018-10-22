import React from 'react';
import { css } from 'react-emotion';
// First way to import
import { ClipLoader, PropagateLoader } from 'react-spinners';
 
const override = css`
    display: block;
    margin: 100 100;
    border-color: red;
`;
 
class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <PropagateLoader
          className={override}
          sizeUnit={"px"}
          size={10}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}

export default AwesomeComponent;