import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {updateTest} from '../public/redux/actionCreators/device';

class Test extends React.Component {
  sendData = async () => {
    await this.props.dispatch(updateTest('lah'));
    console.log(this.props.device);
  };

  render() {
    console.log(this.props.device, 'line 13');
    return (
      <View>
        <Text>Test</Text>
        <Button title="Send Data" onPress={this.sendData} />
      </View>
    );
  }
}

// const Test = (props) => {
//   console.log(props.device);

//   const sendData = async () => {
//     await props.dispatch(updateTest('Bro'));
//     console.log(props.device, 'Line 11');
//   };

//   // console.log(props.device);
//   return (
//     <View>
//       <Text>Test</Text>
//       <Button title="Send Data" onPress={sendData} />
//     </View>
//   );
// };

const mapsStateToProps = ({device}) => {
  return {
    device,
  };
};

export default connect(mapsStateToProps)(Test);
