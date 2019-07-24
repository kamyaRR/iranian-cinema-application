import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
  container : {
    flex:1
  },

  main : {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'

  },
  loginbox : {
    backgroundColor: "#dfe6e9",
    flex: 1,
    paddingBottom: 20,
    marginLeft: 50,
    marginRight: 50,
    elevation: 10,
    borderRadius: 3

  },
  logintitle : {
    fontFamily: 'Sp_Jalal Normal_p30download.com',
    textAlign: 'center',
    fontSize: 50,
    paddingTop: 10,
    paddingBottom: 10
  },
  groupInput : {
    margin: 10,
    marginLeft:15,
    marginRight: 15
  },
  labeltext : {
    fontFamily: 'iransans',
    fontSize: 25,
    color: '#5256c9',
    marginBottom: 10,
    //fontWeight: 'bold'
  },
  InputText : {
    textAlign:'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,1)',
    padding: 10,
    borderRadius: 2

  },
  loginbutton : {
    textAlign: 'center',
    backgroundColor: '#0984e3',
    marginRight: 25,
    marginLeft: 25,
    borderRadius: 25,
    padding: 10,
    marginTop: 10,
    color: 'white',
    elevation: 2
  },
  passwordforgot : {
    textAlign: 'center',
    marginTop: 15
  },
  
});
export default styles;
