import * as React from 'react';
import { Text, Alert } from 'react-native';

export default function AlertHelper() {
    
       return Alert.alert(
            'Thanks for Coming!',
            'Click one of the 3 buttons below',
            [
              { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
          );
    
}
