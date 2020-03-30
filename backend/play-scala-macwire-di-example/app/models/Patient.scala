package models

object Patient {
    def apply(_id: String, hosptialId: Int, typee: Int, moreInfo: String): Patient = {
        Patient(_id, hosptialId, typee, moreInfo)
    }
}

case class Patient(_id: String, hosptialId: Int, typee: Int, moreInfo: String)