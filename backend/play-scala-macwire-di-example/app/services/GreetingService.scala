package services

import scala.concurrent.ExecutionContext

class GreetingService(implicit ec: ExecutionContext) {

  def greetingMessage(language: String) = language match {
    case "it" => "Messi"
    case _ => "Hello"
  }
}
