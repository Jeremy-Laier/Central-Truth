// @GENERATOR:play-routes-compiler
// @SOURCE:/home/jeremy/Notions/backend/play-scala-macwire-di-example/conf/routes
// @DATE:Thu Mar 26 13:53:48 CDT 2020


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
