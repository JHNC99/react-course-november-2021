
export default function storageData() {
let initialValues = JSON.parse(localStorage.getItem("values"));
if (!initialValues) {
  initialValues = [];
}
return initialValues
}
