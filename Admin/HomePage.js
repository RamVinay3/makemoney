import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import RNUpiPayment from 'react-native-upi-payment'
export class HomePage extends Component {
    constructor(props){
        super();
        this.state={
            Status:"", txnId:"",
        }
    }
    
    render() {
        that=this;
        function floo(){
            RNUpiPayment.initializePayment({
                vpa: '9347747143@okbizaxis', // or can be john@ybl or mobileNo@upi
                payeeName: 'Payee Name',
                amount: 1,
                transactionRef: 'AXId8c71205eb7d459889bb7018bdf2c056'
            },successCallback,failureCallback);
        }
        function failureCallback(data){
            if(data['Status']=="SUCCESS"){
                that.setState({Status:"SUCCESS"});
                that.setState({txnId:data['txnId']});}
            else{
                that.setState({Status:"FAILURE"})}
        }
        function successCallback(data){
            //nothing happened here using Google Pay
        }
        // console.log(RNUpiPayment,"is upii")
        return (
            <TouchableOpacity onPress={()=>{floo()
                console.log("open clicke dbroo")
                }}  style={{alignItems:"center",justifyContent:"center",flex:1}}>
                <View >
          
           <Text >OPEN</Text>
         
            <Text>{this.state.Status+" "+this.state.txnId}</Text>
        </View>
        </TouchableOpacity>
        )
    }
}

export default HomePage
