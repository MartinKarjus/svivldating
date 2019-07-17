import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './components/home/Home.js'
import About from './components/about/About.js'
import Location from './components/registering/Location.js'
import LookingFor from './components/registering/LookingFor'
import GenderPicker from './components/registering/GenderPicker'
import AgePicker from './components/registering/AgePicker'
import UserloginRegister from './components/UserloginRegister'
import ImageUpload from './components/registering/ImageUpload'
import Browser from './components/browsing/Browser'


const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "userloginregister" component = {UserloginRegister} title = "userloginregister" initial = {true}/>
            <Scene key = "home" component = {Home} title = "Home" />
            <Scene key = "about" component = {About} title = "About" />
            <Scene key = "locationpicker" component = {Location} title = "lookingpicker" />
            <Scene key = "lookingfor" component = {LookingFor} title = "lookingfor" />
            <Scene key = "genderpicker" component = {GenderPicker} title = "genderpicker" />
            <Scene key = "agepicker" component = {AgePicker} title = "agepicker" />
            <Scene key = "imageupload" component = {ImageUpload} title = "imageupload" />


            <Scene key = "browser" component = {Browser} title = "browser" />

        </Scene>
    </Router>
);
export default Routes