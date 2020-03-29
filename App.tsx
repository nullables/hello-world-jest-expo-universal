import { AuthSession } from 'expo';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { getAuthorizeUrl } from './helpers';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Press me"
        onPress={async () => {
          const returnUrl = 'helloworld://any';
          const authUrl = getAuthorizeUrl(
            {
              client_id: 'INSERT_YOUR_CLIENT_ID', // https://www.reddit.com/prefs/apps/ + match redirect Url with aformentioned returnUrl
              duration: 'temporary',
              redirect_uri: returnUrl,
              response_type: 'code',
              scope: ['identity'],
            },
            '.compact'
          );
          const result = await AuthSession.startAsync({
            authUrl,
            returnUrl,
          }).catch(alert);
          alert(JSON.stringify(result));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
