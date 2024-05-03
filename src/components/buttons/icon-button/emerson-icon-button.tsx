import {Component, Event, EventEmitter, h, Listen, Method, Prop} from "@stencil/core";
import {SizeIconButton, TypeIconButton} from "../utils.button";

@Component({
  tag: 'emerson-icon-button',
  styleUrl: 'emerson-icon-button.scss',
  scoped: true,
})
export class EmersonIconButton {
  @Prop() size: SizeIconButton = SizeIconButton.small;
  @Prop() type: TypeIconButton = TypeIconButton.primary;
  @Prop() disabled: boolean = false;
  @Prop() icon_name: string = 'download';

  sizeButtonValues = {
    medium: '28px',
    small: '20px'
  };
  @Event()
  buttonClicked: EventEmitter

  @Method()
  async btnClick() {
    console.log('click')
  }

  @Listen('click')
  async handleClick() {
    this.buttonClicked.emit('click')
  }

  render() {
    const buttonClasses = {
      [`btn-${this.size}`]: true,
      [`btn-${this.type}`]: true,
    };
    return (
      <button class={buttonClasses} disabled={this.disabled} onClick={async () => this.btnClick()}>
        <div class='btn-content'>
          <emerson-btn-icon name={this.icon_name} size={this.sizeButtonValues[this.size]}></emerson-btn-icon>
        </div>
      </button>
    );
  }
}
