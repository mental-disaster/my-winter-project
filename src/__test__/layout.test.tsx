import { test, expect} from "bun:test";
import { GlobalRegistrator } from "@happy-dom/global-registrator";

test('dom test',() =>{
  document.body.innerHTML = `<button>My button</button>`;
  const button = document.querySelector('button');
  expect(button?.innerText).toEqual('My button');
})

