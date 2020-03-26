// @GENERATOR:play-routes-compiler
// @SOURCE:/home/jeremy/Notions/backend/play-scala-macwire-di-example/conf/routes
// @DATE:Thu Mar 26 13:53:48 CDT 2020

package controllers;

import router.RoutesPrefix;

public class routes {
  
  public static final controllers.ReverseGreeterController GreeterController = new controllers.ReverseGreeterController(RoutesPrefix.byNamePrefix());
  public static final controllers.ReverseAssets Assets = new controllers.ReverseAssets(RoutesPrefix.byNamePrefix());

  public static class javascript {
    
    public static final controllers.javascript.ReverseGreeterController GreeterController = new controllers.javascript.ReverseGreeterController(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReverseAssets Assets = new controllers.javascript.ReverseAssets(RoutesPrefix.byNamePrefix());
  }

}
