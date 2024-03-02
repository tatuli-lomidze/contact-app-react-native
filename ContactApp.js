import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView, SectionList, FlatList } from 'react-native';
import contacts from './contacts';

const ContactApp = ({ reverseList }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const sortedContacts = contacts.sort((a, b) => a.fullName.localeCompare(b.fullName))
  const filteredContacts = sortedContacts.filter(contact =>
    contact.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  )

  const renderItem = ({ item }) => (
    <View style={styles.contact}>
      <Text>Name: {item.fullName}</Text>
      <Text>Phone: {item.phoneNumber}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList
        data={reverseList ? filteredContacts.reverse() : filteredContacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.fullName}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchInput: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  contact: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
})

export default ContactApp
