import Photo from "./Photos/minister-d.png";
import Canon from "./Photos/canonAE1.png";
import Pentax from "./Photos/pentaxK1000.png";
import Olympus from "./Photos/olympus.png";
import Minolta from "./Photos/minoltaX700.png";
import Ricoh from "./Photos/ricoh.png";
const item01 = {
  brand: "YASHICA",
  model: "minister-d",
  year: "1964",
  price: "200",
  description:
    "The Yashica Minister D rangefinder camera was manufactured in Japan beginning around 1964. The main change from the Yashica Minister III was the new CdS meter cell mounted below the rewind crank. However the light meter remained uncoupled from the exposure settings on the lens barrel. The Minister 700 is a variant of the same camera but with a faster, f/1.7 lens. ",
  id: `01`,
  img: Photo,
};
const item02 = {
  brand: "Minolta",
  model: "X-700",
  year: "1981",
  price: "459",
  description:
    "For those who think manual cameras are nifty in concept, but a little too laborious in execution, check out the Minolta X-700 35mm SLR Film Camera. It allows for automatic setting on the aperture or shutter, meaning you don’t have to personally adjust the camera to adapt to an environmental change. Furthermore, you can program the camera to automatically correspond a specific shutter speed with a given aperture. Of course, if you’d rather retain full control over every detail, the high-quality film camera offers manual exposure and focus as well.",
  id: `02`,
  img: Minolta,
};
const item03 = {
  brand: "Canon",
  model: "AE-1",
  year: "1976",
  price: "649",
  description:
    "More than just a piece of solid gadgetry, the Canon AE-1 35mm Film Camera is living history. Made in Japan during the late 70s and early 80s, it was the first single-lens reflex (SLR) camera to come equipped with a microprocessor. Between that and other notable features like its interchangeable lens and electromagnet horizontal cloth focal plane shutter, the camera came roaring out the gates and sold in record numbers for an SLR. To this day, it remains a beautiful piece of equipment, and one of the best high quality film cameras you can find for the price range. If you ask any classic Canon user, what is the best film camera? They’ll give you your answer right here.",
  id: `03`,
  img: Canon,
};
const item04 = {
  brand: "Pentax",
  model: "K1000",
  year: "1997",
  price: "459",
  description:
    "Long live the Pentax K1000! The trusty and affordable 35mm SLR film camera reigned for just over twenty years before shuttering (no pun intended) in 1997. Distinguished by a completely unfettered design, the top film camera doesn’t require a battery to operate (though you will need to instal an A76 cell battery to use the light meter), and hosts just three shooting controls: aperture, shutter speed and focus. Load up some film, set the speed, and wait for that perfect shot. That’s the beauty of traditional photography.",
  id: `04`,
  img: Pentax,
};
const item05 = {
  brand: "Olympus",
  model: "OM-1",
  year: "1969",
  price: "625",
  description:
    "Fully manual and beautifully affordable is the Olympus OM-1. This vintage 70s stunner keeps it straightforward in function and clean in design. If you’re looking for a compact, lightweight, sturdy analog camera that won’t set you back on rent, your search ends here. Olympus makes some nice contributions to the analog space.",
  id: `05`,
  img: Olympus,
};
const item06 = {
  brand: "Ricoh",
  model: "RZ-750",
  year: "1989",
  price: "149",
  description:
    "The RZ-750 is an autofocus compact camera for 35mm film, introduced by Ricoh in 1989. It is also known as the Shotmaster Zoom or TF-900 Zoom. The RZ-750 was Ricoh's top of the line compact camera of the day with exceptional creative capabilities. It incorporates special modes that are very unique for a compact camera. These are 'Continuous shooting mode', 'Interval shooting mode', ' Multiple exposure mode' etc. The camera is also compatible with a remote control device through its electrical socket. An optional dedicated 1.5X front tele-converter was also available, and it extends the maximum focal length of the lens to 114mm",
  id: `06`,
  img: Ricoh,
};

export const items = [item01, item02, item03, item04, item05, item06];
