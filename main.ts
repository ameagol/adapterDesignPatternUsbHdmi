const usbScreen = new USBScreen();
const hdmiScreen = new HDMIScreen();
const dviScreen = new DVIScreen();
const usbToHDMIAdapter = new USBToHDMIAdapter(hdmiScreen);
const usbToDVIAdapter = new USBToDVIAdapter(dviScreen);

// Displaying content using USB, HDMI, and DVI screens
const componentWithUSBToHDMI = new ContentComponent(usbToHDMIAdapter);
componentWithUSBToHDMI.displayContent("Hello, HDMI (via USB to HDMI adapter)!");

const componentWithUSBToDVI = new ContentComponent(usbToDVIAdapter);
componentWithUSBToDVI.displayContent("Hello, DVI (via USB to DVI adapter)!");
