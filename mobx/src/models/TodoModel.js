import { observable } from 'mobx';

export default class TodoModel {
  id = Math.random();
  @observable content;
  @observable finished = false;

  constructor(content) {
    this.content = content;
  }

  done() {
    this.finished = true;
  }
}
