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


Vue.use(Router);

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
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
  ]
})
