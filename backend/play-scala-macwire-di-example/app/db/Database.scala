package db
import scala.collection.JavaConverters._
import scala.concurrent.ExecutionContext
import scala.util.Success
import models._

class Database()(implicit ec: ExecutionContext) {
    import org.mongodb.scala.bson.codecs.Macros._
    import org.mongodb.scala.bson._
    import org.bson.codecs.configuration.CodecRegistries.{fromRegistries, fromProviders}

    val codecRegistry = fromRegistries(fromProviders(classOf[HealthcareWorker], classOf[Patient], classOf[Stock]))
}