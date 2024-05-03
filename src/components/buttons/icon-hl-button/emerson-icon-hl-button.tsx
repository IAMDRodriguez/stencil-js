import {Component, EventEmitter, h, Listen, Method, Prop, Event} from "@stencil/core";
import {TypeIconHLButton} from "../utils.button";

@Component({
  tag: 'emerson-icon-hl-button',
  styleUrl: 'emerson-icon-hl-button.scss',
  scoped: true,
})
export class EmersonIconHlButton {
  @Prop() type: TypeIconHLButton = TypeIconHLButton.default;
  @Prop() disabled: boolean = false;
  @Prop() icon_name: string = 'chevron_right';

  @Method()
  async btnClick() {
    console.log('click')
  }

  @Listen('click')
  async handleClick() {
    this.buttonClicked.emit('click')
  }

  @Event()
  buttonClicked: EventEmitter

  render() {
    const buttonClasses = {
      [`btn-${this.type}`]: true,
    };
    return (
      <button class={buttonClasses} disabled={this.disabled} onClick={async() => this.btnClick()}>
        <div class='btn-content'>
           <emerson-btn-icon name={this.icon_name} size='16px'></emerson-btn-icon>
        </div>
      </button>
    );
  }
}
