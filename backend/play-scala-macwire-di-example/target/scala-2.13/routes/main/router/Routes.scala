// @GENERATOR:play-routes-compiler
// @SOURCE:/home/jeremy/Notions/backend/play-scala-macwire-di-example/conf/routes
// @DATE:Thu Mar 26 13:53:48 CDT 2020

package router

import play.core.routing._
import play.core.routing.HandlerInvokerFactory._

import play.api.mvc._

import _root_.controllers.Assets.Asset

class Routes(
  override val errorHandler: play.api.http.HttpErrorHandler, 
  // @LINE:2
  GreeterController_1: controllers.GreeterController,
  // @LINE:6
  Assets_0: controllers.Assets,
  val prefix: String
) extends GeneratedRouter {

   @javax.inject.Inject()
   def this(errorHandler: play.api.http.HttpErrorHandler,
    // @LINE:2
    GreeterController_1: controllers.GreeterController,
    // @LINE:6
    Assets_0: controllers.Assets
  ) = this(errorHandler, GreeterController_1, Assets_0, "/")

  def withPrefix(addPrefix: String): Routes = {
    val prefix = play.api.routing.Router.concatPrefix(addPrefix, this.prefix)
    router.RoutesPrefix.setPrefix(prefix)
    new Routes(errorHandler, GreeterController_1, Assets_0, prefix)
  }

  private[this] val defaultPrefix: String = {
    if (this.prefix.endsWith("/")) "" else "/"
  }

  def documentation = List(
    ("""GET""", this.prefix, """controllers.GreeterController.index"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """greetings""", """controllers.GreeterController.greetings"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """greet""", """controllers.GreeterController.greetInMyLanguage"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """assets/""" + "$" + """file<.+>""", """controllers.Assets.at(path:String = "/public", file:String)"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """favicon.ico""", """controllers.Assets.at(path:String = "/images", file:String = "favicon.png")"""),
    Nil
  ).foldLeft(List.empty[(String,String,String)]) { (s,e) => e.asInstanceOf[Any] match {
    case r @ (_,_,_) => s :+ r.asInstanceOf[(String,String,String)]
    case l => s ++ l.asInstanceOf[List[(String,String,String)]]
  }}


  // @LINE:2
  private[this] lazy val controllers_GreeterController_index0_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix)))
  )
  private[this] lazy val controllers_GreeterController_index0_invoker = createInvoker(
    GreeterController_1.index,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.GreeterController",
      "index",
      Nil,
      "GET",
      this.prefix + """""",
      """""",
      Seq()
    )
  )

  // @LINE:3
  private[this] lazy val controllers_GreeterController_greetings1_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("greetings")))
  )
  private[this] lazy val controllers_GreeterController_greetings1_invoker = createInvoker(
    GreeterController_1.greetings,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.GreeterController",
      "greetings",
      Nil,
      "GET",
      this.prefix + """greetings""",
      """""",
      Seq()
    )
  )

  // @LINE:4
  private[this] lazy val controllers_GreeterController_greetInMyLanguage2_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("greet")))
  )
  private[this] lazy val controllers_GreeterController_greetInMyLanguage2_invoker = createInvoker(
    GreeterController_1.greetInMyLanguage,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.GreeterController",
      "greetInMyLanguage",
      Nil,
      "GET",
      this.prefix + """greet""",
      """""",
      Seq()
    )
  )

  // @LINE:6
  private[this] lazy val controllers_Assets_at3_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("assets/"), DynamicPart("file", """.+""",false)))
  )
  private[this] lazy val controllers_Assets_at3_invoker = createInvoker(
    Assets_0.at(fakeValue[String], fakeValue[String]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Assets",
      "at",
      Seq(classOf[String], classOf[String]),
      "GET",
      this.prefix + """assets/""" + "$" + """file<.+>""",
      """""",
      Seq()
    )
  )

  // @LINE:7
  private[this] lazy val controllers_Assets_at4_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("favicon.ico")))
  )
  private[this] lazy val controllers_Assets_at4_invoker = createInvoker(
    Assets_0.at(fakeValue[String], fakeValue[String]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Assets",
      "at",
      Seq(classOf[String], classOf[String]),
      "GET",
      this.prefix + """favicon.ico""",
      """""",
      Seq()
    )
  )


  def routes: PartialFunction[RequestHeader, Handler] = {
  
    // @LINE:2
    case controllers_GreeterController_index0_route(params@_) =>
      call { 
        controllers_GreeterController_index0_invoker.call(GreeterController_1.index)
      }
  
    // @LINE:3
    case controllers_GreeterController_greetings1_route(params@_) =>
      call { 
        controllers_GreeterController_greetings1_invoker.call(GreeterController_1.greetings)
      }
  
    // @LINE:4
    case controllers_GreeterController_greetInMyLanguage2_route(params@_) =>
      call { 
        controllers_GreeterController_greetInMyLanguage2_invoker.call(GreeterController_1.greetInMyLanguage)
      }
  
    // @LINE:6
    case controllers_Assets_at3_route(params@_) =>
      call(Param[String]("path", Right("/public")), params.fromPath[String]("file", None)) { (path, file) =>
        controllers_Assets_at3_invoker.call(Assets_0.at(path, file))
      }
  
    // @LINE:7
    case controllers_Assets_at4_route(params@_) =>
      call(Param[String]("path", Right("/images")), Param[String]("file", Right("favicon.png"))) { (path, file) =>
        controllers_Assets_at4_invoker.call(Assets_0.at(path, file))
      }
  }
}
