class HDMIScreen implements Screen {
  constructor(private connection: string) {}

  display(): void {
    console.log(`${this.connection}`);
  }
}
