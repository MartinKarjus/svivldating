import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AgePicker from "@/components/registering/AgePicker"
import GenderPicker from "@/components/registering/GenderPicker"
import ImageUpload from "@/components/registering/ImageUpload"
import Location from "@/components/registering/Location"
import LookingFor from "@/components/registering/LookingFor"
import UsernamePasswordEmail from "@/components/registering/UsernamePasswordEmail"
import UserLoginRegister from "@/components/UserLoginRegister"
import UserAgreement from "@/components/registering/UserAgreement"
import AccCreated from "@/components/registering/AccCreated"
import Home from "@/components/home/Home"
import Browser from "@/components/browsing/Browser"
import Colorgame from "@/components/content/Colorgame"
import Quiz from "@/components/content/Quiz"
import Matches from "@/components/browsing/Matches"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "matches",
      name: "Matches",
      component: Matches
    },{
      path: "colorgame",
      name: "Colorgame",
      component: Colorgame
    },{
      path: "quiz",
      name: "Quiz",
      component: Quiz
    },
    {
      path: "/",
      name: "UserLoginRegister",
      component: UserLoginRegister
    },
    {
      path: "agepicker",
      name: "AgePicker",
      component: AgePicker
    },
    {
      path: "genderpicker",
      name: "GenderPicker",
      component: GenderPicker
    },
    {
      path: "imageupload",
      name: "ImageUpload",
      component: ImageUpload
    },
    {
      path: "location",
      name: "Location",
      component: Location
    },
    {
      path: "lookingfor",
      name: "LookingFor",
      component: LookingFor
    },
    {
      path: "usernamepasswordemail",
      name: "UsernamePasswordEmail",
      component: UsernamePasswordEmail
    },
    {
      path: "useragreement",
      name: "UserAgreement",
      component: UserAgreement
    },
    {
      path: "acccreated",
      name: "AccCreated",
      component: AccCreated
    },
    {
      path: "home",
      name: "Home",
      component: Home
    },
    {
      path: "browser",
      name: "Browser",
      component: Browser
    }
  ]
})
