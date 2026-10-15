import type { Config } from "tailwindcss";
export default { content:["./app/**/*.tsx","./components/**/*.tsx"],
 theme:{extend:{colors:{bg:"#080A09",bg2:"#0D110E",bg3:"#121713",card:"#171D18",lime:"#B5F36A",green:"#83D94A",deep:"#244B2A",soft:"#F4F6F1",muted:"#A2AAA2"},
 fontFamily:{sans:["var(--font-inter)"],display:["var(--font-display)"]}}},plugins:[]} satisfies Config;
