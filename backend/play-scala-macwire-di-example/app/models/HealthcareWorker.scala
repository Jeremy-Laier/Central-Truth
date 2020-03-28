// package models
// import org.mongodb.scala.bson.ObjectId

// object HealthcareWorker {
//     def apply(_id: ObjectId, hosptialId: Int, moreInfo: String): HealthcareWorker = {
//         HealthcareWorker(new ObjectId(), hosptialId, moreInfo)
//     }
// }
object HealthcareWorker{ }
case class HealthcareWorker (_id: String, hosptialId: Int, moreInfo: String)
