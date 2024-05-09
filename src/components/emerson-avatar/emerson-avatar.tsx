import { Component, Prop, h } from '@stencil/core';
import { AvatarSize } from './emerson-avatar.data';

@Component({
  tag: 'emerson-avatar',
  styleUrl: 'emerson-avatar.scss',
  scoped: true,
})
export class EmersonAvatar {
  @Prop() src: string; // Source URL for the avatar image
  @Prop() alt: string; // Alternate text for the avatar image
  @Prop() size: AvatarSize = AvatarSize.large; // Size of the avatar (default: 49px)
  @Prop() active: boolean = false;

  render() {
    return (
      <div class={{'avatar': true,
       'avatar__active': this.active,
       'avatar__large': this.size == AvatarSize.large,
       'avatar__small': this.size == AvatarSize.small  }}>
        {this.src ? <img src={this.src} alt={this.alt} /> : <img src="../../assets/images/generic-avatar.png"/>}
      </div>
    );
  }

}
