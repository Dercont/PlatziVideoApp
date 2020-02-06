 import {Platform} from 'react-native';
    st styles = StyleSheet.create({
      container: {
        flex: 1,
        ...Platform.select({
          ios: {
            backgroundColor: 'red',
          },
          android: {
            backgroundColor: 'blue',
          },
        }),
      },
    });