import {Component, h, Prop, State} from "@stencil/core";


@Component({
  tag: 'emerson-split-button',
  styleUrl: 'emerson-split-button.scss',
  scoped: true,
})
export class EmersonSplitButton {
  @Prop() label: string = 'BUTTON';
  @Prop() is_icon: boolean = true;
  @Prop() icon_name: string = 'content_copy';
  @Prop() options: string[] = ['Action A', 'Action B', 'Menu Item'];

  @State() showDropDown: boolean = false;

  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  render() {
    const buttonClasses = {
      'btn': true,
      'btn-uppercase': true
    };

    return (
      <div class='content'>
        <button class={buttonClasses}>
          <div class='btn-content'>
            {this.is_icon && <emerson-btn-icon name={this.icon_name} size='18px'></emerson-btn-icon>}
            {this.label}
          </div>
        </button>

        <div class='select-container'>
          <label>
            <div
              class={"custom-select-container" + (this.showDropDown ? ' custom-select-container--active' : '')}
              role='listbox'
              aria-expanded={this.showDropDown.toString()}
              aria-label='OPTIONS'
              onClick={() => this.toggleDropDown()}
              tabIndex={0}
            >
              OPTIONS
              <emerson-btn-icon name='expand_more' size='18px'></emerson-btn-icon>
            </div>
          </label>
          {this.showDropDown && (
            <div class="dropdown">
              {this.options.map((opcion) => (
                <div
                  class='option'
                  role="option"
                  onClick={() => {
                    this.toggleDropDown();
                  }}
                >
                  <span>{opcion}</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    );
  }
}
