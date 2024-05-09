import { Component, Prop, h } from '@stencil/core';
import { SekeletonType } from './emerson-skeleton.data';

@Component({
  tag: 'emerson-skeleton',
  styleUrl: 'emerson-skeleton.css',
  shadow: true,
})
export class EmersonSkeleton {
  @Prop() variant: SekeletonType; // Type of skeleton: circle, rectangle, text, etc.
  @Prop() animation: boolean = false;
  @Prop() width: string;
  @Prop() height: string;

  render() {
    let skeletonClass;

    // Render different skeleton types based on the input type
    switch (this.variant) {
      case SekeletonType.circle:
        skeletonClass = "skeleton-circle"
        break;
      case SekeletonType.rectangle:
        skeletonClass = "skeleton-rectangle"
        break;
      case SekeletonType.text:
        skeletonClass = "skeleton-text"
        break;
      case SekeletonType.rounded:
        skeletonClass = "skeleton-rounded"
        break;
      default:
        skeletonClass = "skeleton-rectangle"
        break;
    }

    return (
      <div class="skeleton">
        <div class={`${skeletonClass} ${this.animation ? 'shimmer' : ''}`} style={{ width: this.width, height: this.height }}></div>
      </div>
    );
  }

}
