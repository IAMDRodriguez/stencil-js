import { Component, Prop, h } from '@stencil/core';
import { BadgeColor, BadgePosition, BadgeVariant } from './badge.data';

@Component({
  tag: 'emerson-badge-component',
  styleUrl: 'badge-component.css',
  shadow: true,
})
export class BadgeComponent {
  @Prop() text: string;
  @Prop() color: BadgeColor;
  @Prop() variant: BadgeVariant;
  @Prop() position: BadgePosition = BadgePosition.topRight

  render() {
    return (
      <div class="badge">
        {this.variant === BadgeVariant.standard &&
          <span class={`count ${BadgeColor[this.color] === BadgeColor.primary ? 'primary' : ''} ${this.position}`}
            style={{ "background-color": BadgeColor[this.color] || "none" }}>
            {this.text}
          </span>}
        {this.variant === BadgeVariant.dot && <span class={`dot-badge ${this.position}`} style={{ backgroundColor: BadgeColor[this.color] || "none" }}></span>}
        <slot></slot>
      </div>
    );
  }
}
