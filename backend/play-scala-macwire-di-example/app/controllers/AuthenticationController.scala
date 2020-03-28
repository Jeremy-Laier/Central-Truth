package controllers

import models.Greeting
import play.api.i18n.Langs
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, ControllerComponents}
import play.twirl.api.Html

class AuthenticationController(greetingService: GreetingService, cc: ControllerComponents)
  extends AbstractController(cc) {
    // get mongo database
    // get collection
    def auth(userName: String, userPassword: String):  {
        collection.findOne({ Name: userName }, function(err, obj) {
        if (obj == null) {
        // nonExistent username
      } else if (obj.Password != userPassword) {
        // wrong password
      } else {
        // correct password and username
      }
    }
}