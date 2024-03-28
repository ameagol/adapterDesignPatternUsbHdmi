class ContentComponent {
  private screen: Screen;

  constructor(screen: Screen) {
    this.screen = screen;
  }

  displayContent(content: string): void {
    this.screen.display(content);
  }
}
