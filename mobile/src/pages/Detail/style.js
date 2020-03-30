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
    alignItems: 'center',
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    marginBottom: 16,
    borderEndColor: '#FFF',
    marginTop: 48,
  },

  incidentProperty: {
    color: '#41414d',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 24,
  },

  incidentValue: {
    color: '#FFF',
    fontSize: 15,
    marginTop: 8,
  },

  contactBox: {
    color: '#FFF',
    padding: 24,
    borderRadius: 8,
    marginBottom: 16,
    borderEndColor: '#FFF',
    marginTop: 48,
  },

  heroTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30
  },

  heroDescription: {
    color: '#737380',
    fontSize: 15,
    marginTop: 16
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  },

  action: {
    backgroundColor: '#E02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  }


});