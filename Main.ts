const hdmiScreen = new HDMIScreen();
const dviScreen = new DVIScreen();

const adapterUSB = new AdapterUSB();

// Displaying content
adapterUSB.connect(hdmiScreen);
adapterUSB.connect(dviScreen);
