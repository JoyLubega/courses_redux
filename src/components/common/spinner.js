import React from 'react';
import { css } from 'react-emotion';
// First way to import
import { ClipLoader, PropagateLoader, RingLoader} from 'react-spinners';
 
const override = css`
    display: block;
    margin-left: 550px;
    margin-top:300px;

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
        <RingLoader
          className={override}
          sizeUnit={"px"}
          size={150}
          color={'white'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}

export default AwesomeComponent;