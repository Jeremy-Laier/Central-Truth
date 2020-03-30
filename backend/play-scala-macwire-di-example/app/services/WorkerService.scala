package services

import reactivemongo.api.MongoConnection

import scala.concurrent.ExecutionContext

class WorkerService(mongo: MongoConnection)(implicit ec: ExecutionContext)  {

  def getQuantities = ???
}
