import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#000000'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: '#737380',

  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    fontSize: 20,
    marginBottom: 16,
    marginTop: 48,
    color: '#FFF',
    fontWeight: 'bold'
  },

  description: {
    color: '#737380',
    fontSize: 16,
    lineHeight: 24,
    
  },

  incidentList: {
    marginTop: 32
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#000000',
    marginBottom: 16,
    borderEndColor: '#FFF'
  },

  incidentProperty: {
    color: '#41414d',
    fontSize: 14,
    fontWeight: 'bold'
  },

  incidentValue: {
    color: '#FFF',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 24
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color: '#E02041',
    fontSize: 15,
    fontWeight: 'bold'
  }

});