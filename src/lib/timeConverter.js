import moment from "moment";

export default function timeConverter(timeStamp){
  return moment(timeStamp).fromNow()
}
