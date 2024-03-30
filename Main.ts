const hdmiScreen = new HDMIScreen('Using HDMI Connectivity');
const dviScreen = new DVIScreen('Using DVI Connectivity');

const adapter = new AdapterUSB();

// Displaying content
adapter.connect(hdmiScreen);
adapter.connect(dviScreen);
