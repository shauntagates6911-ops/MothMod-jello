// MothMod Emote Pack v1
// SHAUNTE Cosmic Edition

export const MothModEmotes = {
  angry: {
    id: "angry",
    file: "emotes/angry.png",
    description: "Phase-Burn Rage Moth"
  },

  shocked: {
    id: "shocked",
    file: "emotes/shocked.png",
    description: "Astral Shock Moth"
  },

  fastsnail: {
    id: "fastsnail",
    file: "emotes/fastsnail.png",
    description: "Turbo Snail Phase"
  },

  annoyed: {
    id: "annoyed",
    file: "emotes/annoyed.png",
    description: "JUST HELP!"
  }
};

// Event triggers
export function triggerEmote(emoteId) {
  const emote = MothModEmotes[emoteId];
  if (!emote) {
    console.error("Unknown emote:", emoteId);
    return;
  }

  console.log(`MothMod Emote Triggered: ${emote.description}`);
  return emote.file; // return sprite path for rendering
}
import { MothModEmotes, triggerEmote } from "./mothmod-emotes.js";
triggerEmote("angry");
triggerEmote("shocked");
triggerEmote("fastsnail");
triggerEmote("annoyed");
const spritePath = triggerEmote("fastsnail");
renderSprite(spritePath);
