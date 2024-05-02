import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'emerson-icon',
    shadow: false,
})
export class MyIcon1 {
    @Prop() size: string;
    @Prop() name: string;

    render() {
        return (
            <span class="material-icons" style={{ fontSize: this.size }}>{this.name}</span>
        );
    }
}