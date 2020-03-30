package controllers

import play.api.mvc.{AbstractController, ControllerComponents}
import play.twirl.api.Html
import services.GreetingService

class GreeterController(greetingService: GreetingService, cc: ControllerComponents)
    extends AbstractController(cc) {

  def index = Action {
    Ok(Html("<h1>Welcome</h1><p>Your new application is ready.</p>"))
  }

}
