import controllers.GreeterController
import play.api.mvc.ControllerComponents
import reactivemongo.api.DefaultDB
import reactivemongo.api.bson.collection.BSONCollection
import reactivemongo.bson.BSONDocument
import services.ServicesModule

import scala.util.{Failure, Success}

trait GreetingModule extends ServicesModule {
  import com.softwaremill.macwire._

  val document1: BSONDocument = BSONDocument(
    "_id" -> 34,
    "name" -> "Stephane",
    "type" -> "Godbillon",
    "count" -> 29,
    "info" -> BSONDocument(
      "x" -> 203,
      "y" -> 432 ))

  import scala.concurrent.Future
  import scala.concurrent.ExecutionContext.Implicits.global
  import reactivemongo.api.{ AsyncDriver, MongoConnection }

  val mongoUri = "mongodb+srv://backend:YDAv0c4JaddCajHB@demons-g8ybq.mongodb.net/testdb"

  val driver = new AsyncDriver

  val database: Future[DefaultDB] = for {
    uri <- MongoConnection.fromString(mongoUri)
    con <- driver.connect(uri)
    dn <- Future(uri.db.get)
    db <- con.database(dn)
  } yield db

  database.onComplete {
    resolution =>
      val why: Future[BSONCollection] = database.map(_.collection("testc"))

      why.onComplete{
        case Success(value) => value.insert.one(document1)
        case Failure(exception) => exception.printStackTrace()
      }

      println(database.map(_.collection("testc")).onComplete {
        case Success(value) => println(value)
        case Failure(exception) => exception.getStackTrace
      })
      println(s"DB resolution: $resolution")
      driver.close()
  }

  lazy val greeterController: GreeterController = wire[GreeterController]

  def controllerComponents: ControllerComponents
}