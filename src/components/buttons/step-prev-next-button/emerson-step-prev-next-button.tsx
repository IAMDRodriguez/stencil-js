import {Component, h, Prop} from "@stencil/core";
import {TypeIconHLButton, TypeStepPrevNextButton} from "../utils.button";

@Component({
  tag: 'emerson-step-prev-next-button',
  styleUrl: 'emerson-step-prev-next-button.scss',
  scoped: true,
})
export class EmersonStepPrevNextButton {
  @Prop() type: TypeStepPrevNextButton = TypeStepPrevNextButton.default;

  render() {
    switch (this.type) {
      case TypeStepPrevNextButton.default:
        return(
          <div class='content'>
              <emerson-icon-hl-button icon_name='chevron_left'></emerson-icon-hl-button>
              <emerson-icon-hl-button></emerson-icon-hl-button>
          </div>
        );

      case TypeStepPrevNextButton.long:
        return(
          <div class='content'>
          <emerson-icon-hl-button type={TypeIconHLButton.outlined} icon_name='first_page'></emerson-icon-hl-button>
          <emerson-icon-hl-button icon_name='chevron_left'></emerson-icon-hl-button>
          <emerson-icon-hl-button></emerson-icon-hl-button>
          <emerson-icon-hl-button type={TypeIconHLButton.outlined} icon_name='last_page'></emerson-icon-hl-button>
        </div>
        );
      default:
        return <p>Error of Type</p>
    }
  }
}
