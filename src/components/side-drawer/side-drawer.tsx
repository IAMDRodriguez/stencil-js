import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true
})
export class SideDrawer {
  @Prop() header: string;
  @Prop() description: string;

  render() {
    console.log(this.description)
    return (
      <aside>
        <header><h1>{this.header}</h1></header>
        <div>
          {this.description}
        </div>
      </aside>
    );
  }
}