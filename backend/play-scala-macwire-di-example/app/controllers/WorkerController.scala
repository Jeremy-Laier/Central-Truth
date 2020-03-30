package controllers

import play.api.mvc.{AbstractController, ControllerComponents}
import services.WorkerService

class WorkerController(workerService: WorkerService, cc: ControllerComponents)
  extends AbstractController(cc) {

  def getQuantities(itemId: Int) = {

  }
}
