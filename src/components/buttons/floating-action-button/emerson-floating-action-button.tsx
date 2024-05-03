import {Component, EventEmitter, h, Listen, Method, Prop, Event} from "@stencil/core";
import {SizeButton, TypeActionButton} from "../utils.button";

@Component({
  tag: 'emerson-floating-action-button',
  styleUrl: 'emerson-floating-action-button.scss',
  scoped: true,
})
export class EmersonFloatingActionButton {
  @Prop() label: string = 'SAMPLE TEXT';
  @Prop() size: SizeButton = SizeButton.medium;
  @Prop() type: TypeActionButton = TypeActionButton.filled;
  @Prop() disabled: boolean = false;
  @Prop() with_icon: boolean = true;
  @Prop() show_text: boolean = true;
  @Prop() icon_name: string = 'mail_outline';

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
      'btn-uppercase': true
    };
    return (
      <button class={buttonClasses} disabled={this.disabled} onClick={async() => this.btnClick()}>
        <div class='btn-content'>
          {this.with_icon && <emerson-btn-icon name={this.icon_name} size='36px'></emerson-btn-icon>}
          {this.show_text && this.label}
        </div>
      </button>
    );
  }
}
