import {Component, EventEmitter, h, Listen, Method, Prop, Event} from "@stencil/core";
import {SizeButton, TypeButton} from "../utils.button";

@Component({
  tag: 'emerson-button',
  styleUrl: 'emerson-button.scss',
  scoped: true,
})
export class EmersonButton {
  @Prop() label: string = 'BUTTON';
  @Prop() size: SizeButton = SizeButton.medium;
  @Prop() type: TypeButton = TypeButton.primary;
  @Prop() disabled: boolean = false;
  @Prop() is_full: boolean = false;
  @Prop() is_icon: boolean = true;
  @Prop() icon_name: string = 'add';

  sizeButtonValues = {
    large: '18px',
    medium: '16px',
    small: '12px'
  };

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
      [`btn-${this.size}`]: true,
      [`btn-${this.type}`]: true,
      'btn-full': this.is_full,
      'btn-uppercase': true
    };
    return (
      <button class={buttonClasses} disabled={this.disabled} onClick={async() => this.btnClick()}>
        <div class='btn-content'>
          {this.is_icon && <emerson-btn-icon name={this.icon_name} size={this.sizeButtonValues[this.size]}></emerson-btn-icon>}
          {this.label}
        </div>
      </button>
    );
  }
}
