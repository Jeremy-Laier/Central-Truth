//package db
//
//import play.api.libs.json.{JsObject, Json}
//import reactivemongo.bson.{BSONDocument, BSONObjectID}
//import reactivemongo.api.{Cursor, ReadPreference}
//import reactivemongo.api.commands.WriteResult
//import reactivemongo.play.json._
//import reactivemongo.play.json.collection.JSONCollection
//import play.modules.reactivemongo.ReactiveMongoApi
//
//import scala.concurrent.{ExecutionContext, Future}
//
//case class Test(_id: BSONObjectID, name: String, tyype: String, info: BSONObjectID)
//
//object JsonFormats {
//  import play.api.libs.json._
//
//  implicit val TestFormat: OFormat[Test] = Json.format[Test]
//}
//
//class Database(implicit ec: ExecutionContext, mongo: ReactiveMongoApi) {
//  import JsonFormats._
//
//  def todosCollection: Future[JSONCollection] = mongo.database.map(_.collection("testc"))
//
//}