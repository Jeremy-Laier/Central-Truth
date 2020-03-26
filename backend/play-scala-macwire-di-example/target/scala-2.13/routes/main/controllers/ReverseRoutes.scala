// @GENERATOR:play-routes-compiler
// @SOURCE:/home/jeremy/Notions/backend/play-scala-macwire-di-example/conf/routes
// @DATE:Thu Mar 26 13:53:48 CDT 2020

import play.api.mvc.Call


import _root_.controllers.Assets.Asset

// @LINE:2
package controllers {

  // @LINE:2
  class ReverseGreeterController(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:3
    def greetings(): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "greetings")
    }
  
    // @LINE:2
    def index(): Call = {
      
      Call("GET", _prefix)
    }
  
    // @LINE:4
    def greetInMyLanguage(): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "greet")
    }
  
  }

  // @LINE:6
  class ReverseAssets(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:6
    def at(path:String, file:String): Call = {
    
      (path: @unchecked, file: @unchecked) match {
      
        // @LINE:6
        case (path, file) if path == "/public" =>
          implicit lazy val _rrc = new play.core.routing.ReverseRouteContext(Map(("path", "/public"))); _rrc
          Call("GET", _prefix + { _defaultPrefix } + "assets/" + implicitly[play.api.mvc.PathBindable[String]].unbind("file", file))
      
        // @LINE:7
        case (path, file) if path == "/images" && file == "favicon.png" =>
          implicit lazy val _rrc = new play.core.routing.ReverseRouteContext(Map(("path", "/images"), ("file", "favicon.png"))); _rrc
          Call("GET", _prefix + { _defaultPrefix } + "favicon.ico")
      
      }
    
    }
  
  }


}
