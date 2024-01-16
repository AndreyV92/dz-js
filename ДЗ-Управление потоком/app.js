const translator = prompt(`На каком языке хотите продолжить общение? ru, en, de`);

switch (translator) {
  case "ru":
    console.log("Привет");
    break;
  case "en":
    console.log("Hello!");
    break;
  case "de":
    console.log("guten Tag!");
    break;
  default:
    console.log("Такой язык не задан");
}
