package models
import org.mongodb.scala.bson.ObjectId
import play.api.libs.json.Json

object Patient {
    def apply(_id: ObjectId, hosptialId: Int, typee: Int, moreInfo: String): Patient = {
        Patient(new ObjectId(), hosptialId, typee, moreInfo)
    }
}

case class Patient(_id: ObjectId, hosptialId: Int, typee: Int, moreInfo: String)