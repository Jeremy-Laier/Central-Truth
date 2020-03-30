package models

object Stock {
    def apply(_id: String, hosptialId: Int, supply: Int, currentAmount: Int, maxAmount: Int): Stock = {
        Stock(_id, hosptialId, supply, currentAmount, maxAmount)
    }
}

case class Stock (_id: String, hosptialId: Int, supply: Int, currentAmount: Int, maxAmount: Int)