import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: 'emerson-btn-icon',
  scoped: false,
})
export class EmersonBtnIcon {
  @Prop() name: string; //Material Icon Name
  @Prop() size: string;

  render() {
    return (
      <span class='material-icons' style={{fontSize: this.size}}>{this.name}</span>
    );
  }
}
