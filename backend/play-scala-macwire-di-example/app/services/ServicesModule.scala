package services

import scala.concurrent._
import ExecutionContext.Implicits.global
trait ServicesModule {

  import com.softwaremill.macwire._

  lazy val greetingService: GreetingService= wire[GreetingService]
  lazy val workerService: WorkerService = wire[WorkerService]
}
