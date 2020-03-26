package services

import org.mongodb.scala._
import org.mongodb.scala.model.Aggregates._
import org.mongodb.scala.model.Filters._
import org.mongodb.scala.model.Projections._
import org.mongodb.scala.model.Sorts._
import org.mongodb.scala.model.Updates._
import org.mongodb.scala.model._

import scala.collection.JavaConverters._
import scala.concurrent.ExecutionContext
import scala.util.Success

class GreetingService(implicit ec: ExecutionContext) {

  def greetingMessage(language: String) = language match {
    case "it" => "Messi"
    case _ => 
     
      val uri: String = "mongodb+srv://backend:YDAv0c4JaddCajHB@demons-g8ybq.mongodb.net/test?retryWrites=true&w=majority"
      // System.setProperty("org.mongodb.async.type", "netty")  
      val client: MongoClient = MongoClient(uri)
      val db: MongoDatabase = client.getDatabase("testdb")
      val col: MongoCollection[Document] = db.getCollection("testc")
      val doc: Document = Document("_id" -> 0, "name" -> "MongoDB", "type" -> "database",
                             "count" -> 1, "info" -> Document("x" -> 203, "y" -> 102))
      col.insertOne(doc)
      col.find().first().head onComplete {
        case Success(data) => println(data)
        case _ => println("")
      }

      "Hello"
  }

}
