import { autorun, observable } from "@formily/reactive/src/index";

const observableData = observable({
  age: 18,
});

autorun(() => {
  console.log(observableData.age);
});
