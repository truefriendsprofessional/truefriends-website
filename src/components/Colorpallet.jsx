import React from "react";

const palettes = [
  {
    name: "Black & Gold Luxe",
    description:
      "Inspired by our black, gold, and white packaging—perfect for a classic, high-end luxury look with a touch of olive for modernity.",
    colors: [
      { name: "Deep Black", hex: "#181818", usage: "Primary background, text, hero sections" },
      { name: "Rich Gold", hex: "#E7C77C", usage: "Accent, CTAs, highlights" },
      { name: "Warm White", hex: "#F6F5F1", usage: "Content background, text" },
      { name: "Charcoal Gray", hex: "#323232", usage: "Section backgrounds, subtitles" },
      { name: "Metallic Bronze", hex: "#AE8953", usage: "Accent details, icons" },
      { name: "Champagne Beige", hex: "#F3E3C7", usage: "Section backgrounds, cards" },
      { name: "Pearl Silver", hex: "#D2D2D7", usage: "Borders, subtle highlights" },
      { name: "Lux Olive", hex: "#8A846A", usage: "Accent, secondary CTAs" },
    ],
  },
  {
    name: "Bold Red & Classic Neutrals",
    description:
      "A premium palette blending bold reds and rich golds from our packaging, balanced by cool neutrals and blue for occasional highlights.",
    colors: [
      { name: "Crimson Red", hex: "#D32F2F", usage: "Accent, primary buttons, banners" },
      { name: "Jet Black", hex: "#161616", usage: "Background, text, navigation" },
      { name: "Ivory White", hex: "#FAFAFA", usage: "Main content, backgrounds" },
      { name: "Luxury Gold", hex: "#EEC970", usage: "Accents, borders, CTAs" },
      { name: "Slate Gray", hex: "#505050", usage: "Subtitles, section backgrounds" },
      { name: "Rich Cocoa", hex: "#7B5B33", usage: "Details, icons" },
      { name: "Warm Taupe", hex: "#B3A18A", usage: "Cards, section backgrounds" },
      { name: "Cleansing Blue", hex: "#3FA6DA", usage: "Subtle highlights, secondary CTA" },
    ],
  },
];

const ColorSwatch = ({ color }) => (
  <div className="flex items-center space-x-4 my-2">
    <div
      className="w-10 h-10 rounded-xl border-2 shadow"
      style={{ backgroundColor: color.hex }}
    />
    <div>
      <div className="font-semibold">{color.name}</div>
      <div className="text-xs text-gray-400">{color.hex}</div>
      <div className="text-xs text-gray-500 italic">{color.usage}</div>
    </div>
  </div>
);

const ColorPaletteDisplay = () => (
  <div className="max-w-4xl mx-auto bg-black w-full m-0 p-0">
    <h1 className="text-3xl font-bold mb-6 text-center">True Friends Luxury Brand Color Palettes</h1>
    <div className="space-y-12">
      {palettes.map((palette) => (
        <div
          key={palette.name}
          className="bg-white/5 rounded-2xl p-8 shadow-xl border border-zinc-800"
        >
          <h2 className="text-2xl font-bold mb-2">{palette.name}</h2>
          <p className="mb-6 text-gray-400">{palette.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            {palette.colors.map((color) => (
              <ColorSwatch key={color.hex} color={color} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ColorPaletteDisplay;
