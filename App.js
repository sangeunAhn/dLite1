import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {Contacts} from 'expo';
import PageOne from './src/PageOne';
import PageTwo from './src/PageTwo';
import Main from './src/Main';
import codeConfirm from './src/codeConfirm';
import PhoneNumber from './src/PhoneNumber';
import SignUp from './src/SignUp';
import CharChoice from './src/CharChoice';
import SignUpRecord from './src/SignUpRecord';
import RecordRegister from './src/RecordRegister';
import FindClub from './src/FindClub';
import InputSchool from './src/InputSchool';
import ClubSearch from './src/ClubSearch';
import ClubIntroduce from './src/ClubIntroduce';
import ClubFix from './src/ClubFix';
import RecordPictures from './src/RecordPictures';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} hideNavBar={true} title="PageOne" />
          <Scene key="pageTwo" component={PageTwo} hideNavBar={true} title="PageTwo"/>
          <Scene key="Main" component={Main} hideNavBar={true} title="Main"/>
          <Scene key="codeConfirm" component={codeConfirm} hideNavBar={true} title="codeConfirm" />
          <Scene key="PhoneNumber" component={PhoneNumber} hideNavBar={true} title="PhoneNumber"/>
          <Scene key="SignUp" component={SignUp} hideNavBar={true} title="SignUp" />
          <Scene key="CharChoice" component={CharChoice} hideNavBar={true} title="CharChoice" />
          <Scene key="SignUpRecord" component={SignUpRecord} hideNavBar={true} title="SignUpRecord"/>
          <Scene key="RecordRegister" component={RecordRegister} hideNavBar={true} title="RecordRegister" initial={true}/>
          <Scene key="FindClub" component={FindClub} hideNavBar={true} title="FindClub" />
          <Scene key="InputSchool" component={InputSchool} hideNavBar={true} title="InputSchool"/>
          <Scene key="ClubSearch" component={ClubSearch} hideNavBar={true} title="ClubSearch"/>
          <Scene key="ClubIntroduce" component={ClubIntroduce} hideNavBar={true} title="ClubIntroduce"/>
          <Scene key="ClubFix" component={ClubFix} hideNavBar={true} title="ClubFix"/>
          <Scene key="RecordPictures" component={RecordPictures} hideNavBar={true} title="RecordPictures" />
        </Scene>
      </Router>
    )
  }
}