import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ContactApp from './ContactApp';

export default function App() {
  const [showContacts, setShowContacts] = useState(false)
  const [reverseList, setReverseList] = useState(false)

  const toggleContacts = () => setShowContacts(!showContacts)
  const reverseListHandler = () => setReverseList(!reverseList)

  return (
    <View style={styles.container}>
      <Button title={showContacts ? 'Hide Contacts' : 'Show Contacts'} onPress={toggleContacts} />
      {showContacts && (
        <>
          <Button title={reverseList ? 'Sort Ascending' : 'Sort Descending'} onPress={reverseListHandler} />
          <ContactApp reverseList={reverseList} />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})
