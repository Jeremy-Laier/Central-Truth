package models

import reactivemongo.bson.{BSONDocument, BSONDocumentReader, BSONObjectID}

case class Item(_id: BSONObjectID, name: String, tags: Seq[String], unit: String)

object Item {
  implicit object ItemReader extends BSONDocumentReader[Item] {
    def read(doc: BSONDocument): Item = {
      val id = doc.getAs[BSONObjectID]("_id").get
      val name = doc.getAs[String]("name").get
      val tags = doc.getAs[Seq[String]]("tags").get
      val unit = doc.getAs[String]("unit").get
      Item(id, name, tags, unit)
    }
  }
}


