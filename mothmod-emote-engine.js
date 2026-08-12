// MothMod Custom Emote Engine v1
// SHAUNTE Cosmic Edition

export const MothModEmotes = {
  ":angry:": {
    id: "angry",
    file: "emotes/angry.png",
    alt: "angry emote"
  },
  ":shocked:": {
    id: "shocked",
    file: "emotes/shocked.png",
    alt: "shocked emote"
  },
  ":fastsnail:": {
    id: "fastsnail",
    file: "emotes/fastsnail.png",
    alt: "fast snail emote"
  },
  ":annoyed:": {
    id: "annoyed",
    file: "emotes/annoyed.png",
    alt: "annoyed emote"
  }
};

// Replace emote text inside any string
export function parseEmotes(text) {
  let output = text;

  for (const emoteKey in MothModEmotes) {
    const emote = MothModEmotes[emoteKey];

    const imgTag = `<img src="${emote.file}" alt="${emote.alt}" class="mothmod-emote">`;

    // Replace all occurrences of the emote text
    output = output.split(emoteKey).join(imgTag);
  }

  return output;
}

// Example: render emotes inside UI
export function renderTextWithEmotes(element, text) {
  element.innerHTML = parseEmotes(text);
}
// Add new emotes to MothModEmotes

MothModEmotes[":cold:"] = {
  id: "cold",
  file: "emotes/cold.png",
  alt: "cold emote"
};

MothModEmotes[":fading:"] = {
  id: "fading",
  file: "emotes/fading.png",
  alt: "fading emote"
};

MothModEmotes[":king:"] = {
  id: "king",
  file: "emotes/king.png",
  alt: "king emote"
};

MothModEmotes[":saturn:"] = {
  id: "saturn",
  file: "emotes/saturn.png",
  alt: "saturn emote"
};
