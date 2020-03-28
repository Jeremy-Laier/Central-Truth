package models
import org.mongodb.scala.bson.ObjectId
import play.api.libs.json.Json

object Stock {
    def apply(_id: ObjectId, hosptialId: Int, supply: Int, currentAmount: Int, maxAmount: Int): Stock = {
        Stock(new ObjectId(), hosptialId, supply, currentAmount, maxAmount)
    }
}

case class Stock (_id: ObjectId, hosptialId: Int, supply: Int, currentAmount: Int, maxAmount: Int)