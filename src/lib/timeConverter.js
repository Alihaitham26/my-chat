import moment from "moment";

export default function timeConverter(timeStamp){
  return moment(timeStamp).add(-(new Date().getTimezoneOffset()),"m").fromNow()
}
